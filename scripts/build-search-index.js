const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDirectory = path.join(process.cwd(), 'contents');
const outputHeader = path.join(process.cwd(), 'public', 'search-index.json');

function getAllFiles(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.md')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

function stripMarkdown(markdown) {
    if (!markdown) return "";
    // Basic regex stripper to remove markdown syntax for search indexing
    return markdown
        .replace(/^### (.*$)/gim, '$1')
        .replace(/^## (.*$)/gim, '$1')
        .replace(/^# (.*$)/gim, '$1')
        .replace(/^\> (.*$)/gim, '$1')
        .replace(/\*\*(.*)\*\*/gim, '$1')
        .replace(/\*(.*)\*/gim, '$1')
        .replace(/!\[(.*?)\]\(.*?\)/gim, '$1')
        .replace(/\[(.*?)\]\(.*?\)/gim, '$1')
        .replace(/\n/gim, ' ')
        .replace(/```.*?```/gs, '') // Remove code blocks
        .trim();
}

try {
    const files = getAllFiles(contentDirectory);
    const searchIndex = files.map((file) => {
        const fileContent = fs.readFileSync(file, 'utf-8');
        const { data, content } = matter(fileContent);
        const slug = path.basename(file, '.md');

        return {
            slug,
            title: data.title || slug,
            description: data.description || '',
            content: stripMarkdown(content).substring(0, 5000), // Limit content length if needed, for now taking first 5000 chars
            semester: data.semester,
            subject: data.subject
        };
    });

    fs.writeFileSync(outputHeader, JSON.stringify(searchIndex));
    console.log(`Search index generated with ${searchIndex.length} entries.`);
} catch (error) {
    console.error("Error generating search index:", error);
}
