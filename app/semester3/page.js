// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// /**
//  * Blog component that renders a list of blog posts.
//  * Each blog post includes an image, title, description, author, date, and a link to the full post.
//  *
//  * @returns {JSX.Element} The rendered blog component.
//  */

// const BlogCard = ({ data }) => {
//   return (
//     <Link href={data.link}>
//       <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//         <div>
//           <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//             BCA-III
//           </small>
//           <p className="font-bold text-3xl text-[#632DB5]">{data.fileName}</p>
//           <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//             SOUNotes
//           </small>
//         </div>
//         <Image src={data.image} width={170} height={170} alt="Image" />
//       </div>
//     </Link>
//   );
// };

// const Blog = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Main heading for the blog section */}
//       <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
//         Semester-03
//       </h1>

//       {/* Grid layout for blog posts */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
//         <Link href={"/blogpost/"}>
//           <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//             <div>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 BCA-III
//               </small>
//               <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-01</p>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 SOUNotes
//               </small>
//             </div>
//             <Image src="/dbms.jpg" width={170} height={170} />
//           </div>
//         </Link>
//         <Link href={"/blogpost/"}>
//           <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//             <div>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 BCA-III
//               </small>
//               <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-01</p>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 SOUNotes
//               </small>
//             </div>
//             <Image src="/dbms.jpg" width={170} height={170} />
//           </div>
//         </Link>
//         <Link href={"/blogpost/"}>
//           <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//             <div>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 BCA-III
//               </small>
//               <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-01</p>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 SOUNotes
//               </small>
//             </div>
//             <Image src="/dbms.jpg" width={170} height={170} />
//           </div>
//         </Link>
//         <Link href={"/blogpost/"}>
//           <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//             <div>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 BCA-III
//               </small>
//               <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-01</p>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 SOUNotes
//               </small>
//             </div>
//             <Image src="/dbms.jpg" width={170} height={170} />
//           </div>
//         </Link>
//         <Link href={"/blogpost/"}>
//           <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//             <div>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 BCA-III
//               </small>
//               <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-01</p>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 SOUNotes
//               </small>
//             </div>
//             <Image src="/dbms.jpg" width={170} height={170} />
//           </div>
//         </Link>
//         <Link href={"/blogpost/"}>
//           <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//             <div>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 BCA-III
//               </small>
//               <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-01</p>
//               <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//                 SOUNotes
//               </small>
//             </div>
//             <Image src="/dbms.jpg" width={170} height={170} />
//           </div>
//         </Link>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-02</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-03</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-3xl text-[#632DB5]">FLUTTER-LM</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">JAVA-01</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">JAVA-02</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">JAVA-03</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">JAVA-04</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">PYTHON-01</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">PYTHON-02</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">PYTHON-03</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">PYTHON-04</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">ST-01</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">ST-02</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">ST-03</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">ST-04</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">TMP-01</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">TMP-02</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">TMP-03</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">TMP-04</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">UIUX-01</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>{" "}
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">UIUX-02</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>{" "}
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">UIUX-03</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>{" "}
//         <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//           <div>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               BCA-III
//             </small>
//             <p className="font-bold text-4xl text-[#632DB5]">UIUX-04</p>
//             <small className="text-[9px] font-bold text-[#632DB5] opacity-50">
//               SOUNotes
//             </small>
//           </div>
//           <Image src="/dbms.jpg" width={170} height={170} />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Blog;

// import Link from "next/link";
// import Image from "next/image";

// const chaptersData = [
//   {
//     title: "FLUTTER-LM",
//     link: "/blogpost/flutter-lm",
//     image: "/flutter.png",
//     accent: "#027dfd",
//   },
//   {
//     title: "JAVA-LM",
//     link: "/blogpost/java-lm",
//     image: "/java.png",
//     accent: "#db380e",
//   },
//   {
//     title: "PYTHON-LM",
//     link: "/blogpost/python-lm",
//     image: "/python.jpg",
//     accent: "#eec52f",
//   },
//   {
//     title: "ST-LM",
//     link: "/blogpost/st-lm",
//     image: "/st.png",
//     accent: "#8c75ea",
//   },
//   {
//     title: "UIUX-LM",
//     link: "/blogpost/uiux-lm",
//     image: "/uiux.png",
//     accent: "#ec83d0",
//   },

//   {
//     title: "FLUTTER-01",
//     link: "/blogpost/flutter-01",
//     image: "/flutter.png",
//     accent: "#027dfd",
//   },
//   {
//     title: "FLUTTER-02",
//     link: "/blogpost/flutter-02",
//     image: "/flutter.png",
//     accent: "#027dfd",
//   },
//   {
//     title: "FLUTTER-03",
//     link: "/blogpost/flutter-03",
//     image: "/flutter.png",
//     accent: "#027dfd",
//   },
//   // {
//   //   title: "FLUTTER-04",
//   //   link: "/blogpost/flutter-04",
//   //   image: "/flutter.png",
//   // accent: "#027dfd",
//   // },
//   {
//     title: "JAVA-01",
//     link: "/blogpost/java-01",
//     image: "/java.png",
//     accent: "#db380e",
//   },
//   {
//     title: "JAVA-02",
//     link: "/blogpost/java-02",
//     image: "/java.png",
//     accent: "#db380e",
//   },
//   {
//     title: "JAVA-03",
//     link: "/blogpost/java-03",
//     image: "/java.png",
//     accent: "#db380e",
//   },
//   // {
//   //   title: "JAVA-04",
//   //   link: "/blogpost/java-04",
//   //   image: "/java.png",
//   //   accent: "#db380e",
//   // },
//   {
//     title: "PYTHON-01",
//     link: "/blogpost/python-01",
//     image: "/python.jpg",
//     accent: "#eec52f",
//   },
//   {
//     title: "PYTHON-02",
//     link: "/blogpost/python-02",
//     image: "/python.jpg",
//     accent: "#eec52f",
//   },
//   {
//     title: "PYTHON-03",
//     link: "/blogpost/python-03",
//     image: "/python.jpg",
//     accent: "#eec52f",
//   },
//   // {
//   //   title: "PYTHON-04",
//   //   link: "/blogpost/python-04",
//   //   image: "/python.jpg",
//   // accent: "#eec52f",

//   // },
//   {
//     title: "ST-01",
//     link: "/blogpost/st-01",
//     image: "/st.png",
//     accent: "#8c75ea",
//   },
//   // {
//   //   title: "ST-02",
//   //   link: "/blogpost/st-02",
//   //   image: "/st.png",
//   //   accent: "#8c75ea",
//   // },
//   // {
//   //   title: "ST-03",
//   //   link: "/blogpost/st-03",
//   //   image: "/st.png",
//   // accent: "#8c75ea",
//   // },
//   // {
//   //   title: "ST-04",
//   //   link: "/blogpost/st-04",
//   //   image: "/st.png",
//   // accent: "#8c75ea",
//   // },
//   {
//     title: "TMP-01",
//     link: "/blogpost/tmp-01",
//     image: "/tmp.png",
//     accent: "#2c5c9a",
//   },
//   {
//     title: "TMP-02",
//     link: "/blogpost/tmp-02",
//     image: "/tmp.png",
//     accent: "#2c5c9a",
//   },
//   // {
//   //   title: "TMP-03",
//   //   link: "/blogpost/tmp-03",
//   //   image: "/tmp.png",
//   //   accent: "#2c5c9a",
//   // },
//   // {
//   //   title: "TMP-04",
//   //   link: "/blogpost/tmp-04",
//   //   image: "/tmp.png",
//   // accent: "#2c5c9a",
//   // },
//   {
//     title: "UIUX-01",
//     link: "/blogpost/uiux-01",
//     image: "/uiux.png",
//     accent: "#ec83d0",
//   },
//   {
//     title: "UIUX-02",
//     link: "/blogpost/uiux-02",
//     image: "/uiux.png",
//     accent: "#ec83d0",
//   },
//   {
//     title: "UIUX-03",
//     link: "/blogpost/uiux-03",
//     image: "/uiux.png",
//     accent: "#ec83d0",
//   },
//   // {
//   //   title: "UIUX-04",
//   //   link: "/blogpost/uiux-04",
//   //   image: "/uiux.png",
//   // accent: "#ec83d0",

//   // },
// ];

// const Blog = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Main heading for the blog section */}
//       <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
//         Semester-03
//       </h1>

//       {/* Grid layout for blog posts */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
//         {chaptersData.map((chapter, index) => (
//           <Link href={chapter.link} key={index}>
//             <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//               <div>
//                 <small
//                   className="text-[9px] font-bold opacity-50"
//                   style={{ color: chapter.accent }}
//                 >
//                   BCA-III
//                 </small>
//                 <p
//                   className="font-bold text-4xl text-[#632DB5]"
//                   style={{ color: chapter.accent }}
//                 >
//                   {chapter.title}
//                 </p>
//                 <small
//                   className="text-[9px] font-bold text-[#632DB5] opacity-50"
//                   style={{ color: chapter.accent }}
//                 >
//                   SOUNotes
//                 </small>
//               </div>
//               <Image
//                 src={chapter.image}
//                 width={170}
//                 height={170}
//                 alt={chapter.title}
//               />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

// Define the path to the contents directory
const contentDirectory = path.join(process.cwd(), "contents");

// This function runs on the server and fetches the data
export default async function BlogPage() {
  // Read the contents of the directory
  const dirContent = fs.readdirSync(contentDirectory);

  const blogs = dirContent
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      // Check if the blog post belongs to semester 1
      if (data.semester === 3) {
        return { ...data, slug: file.replace(".md", "") }; // Include slug for links
      }
      return null; // Return null for posts that don't belong to semester 1
    })
    .filter((blog) => blog !== null); // Filter out null entries

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
        Semester-03
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {blogs.map((blog) => (
          <Link href={`/blogpost/${blog.slug}`} key={blog.slug}>
            <div className="h-80 w-60 bg-white rounded-lg shadow-lg flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
              <div>
                <small
                  className="text-[9px] font-bold opacity-50"
                  style={{ color: blog.accent || "#ce9fc1" }}
                >
                  BCA-III
                </small>
                <p
                  className="font-bold text-4xl"
                  style={{ color: blog.accent || "#ce9fc1" }}
                >
                  {blog.header}
                </p>
                <small
                  className="text-[9px] font-bold opacity-50"
                  style={{ color: blog.accent || "#ce9fc1" }}
                >
                  SOUNotes
                </small>
              </div>
              <Image
                src={blog.image}
                alt={blog.title}
                width={170}
                height={170}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
