---
header: PCMT-01
title: PCMT-01 PC Maintenance
slug: pcmt-01
semester: 2
image: /pcmt.png
link: https://drive.google.com/file/d/14dN4yc9ncv7AKXgOyZBRe13nquG3Mr7-/view?usp=sharing
---

This section includes information about tasks you can perform to help ensure the trouble-free operation of your PC, and to ease the recovery of important information on your PC should problems arise in the future.

## Creating Data Backup Discs

- You can use the CD or DVD burning software included on your PC to create backup discs of important information including personal files, e-mail messages, and Web site bookmarks.
- When writing data to a backup disc, you should use software that includes write verification functionality. This verification feature compares the data on your hard disk drive with the data copied to the disc to ensure it is an exact copy. Depending on your disc burning software, you may need to manually enable this feature.

## Creating System Recovery Discs

- This is a one-time step that you should perform while your PC is working properly. If you later encounter problems with your PC, you can restore it to its original configuration using the System Recovery discs that you create.
- Before creating recovery discs, read “**System Recovery Overview**“, and then create the discs as described in “**Creating System Recovery Discs**“.

## Removing Unused Programs

1. Click **Start**, and then click **Control Panel**.
2. Double-click **Add or Remove Programs**. The Add or Remove Programs window opens.
3. Select the program you want to remove, and click the **Change/Remove** button
4. Follow the onscreen instructions

> Some programs have their own uninstall features. If you cannot uninstall a program from the Control Panel, try using the program to uninstall.

## Running the Disk Clean-up Program

The Disk Clean-up program frees up space on your hard disk drive by removing temporary and unused files (including Temporary Internet Files and files in the Recycle Bin).

### Running Disk Clean-up manually

1. Click **Start**, **All Programs**, **Accessories**, **System Tools**, and then click **Disk Clean-up**.
2. Choose the files to delete by placing a check mark in the check box next to the file types listed
3. Click **OK**, and then click Yes to finish deleting the selected files

### Scheduling Disk Clean-up to run automatically

1. Click **Start**, and then **Run**, and type the following into the open field: `cleanmgr /sageset:100`
2. Select the types of files that you want removed (for example, temporary files, Temporary Internet Files, and the files in the Recycle Bin).
3. Click **OK** to save the settings
4. Click **Start**, **All Programs**, **Accessories**, **System Tools**, and then click **Scheduled Tasks**
5. Double-click **Add Scheduled Task** and then click **Next**
6. Select **Disk Clean-up** from the application list and then click **Next**
7. Accept the default task name or type a name for the task, select when the task is performed, and click Next
8. Select the time and reoccurrence (if available), and click Next. Disk clean-up may take a long time, so select a time when the PC is on but not in use
9. Enter your login name and password and click **Next**
10. Select **Open advanced properties for this task when I click Finish** and click Finish.
11. In the **Run** field of the Disk Clean-up window add `/sagerun:100` at the end of the path. For example: `C:\WINDOWS\system32\cleanmgr.exe /sagerun:100`
12. Click **OK** and, if prompted, verify your password

## Running the Disk Defragmenter Program

- When Windows stores files on your hard disk drive, it often divides them into multiple pieces (or fragments) so they fit into available space on the drive
- When you attempt to open a fragmented file, it must be retrieved from more than one place, so the process takes more time.
- The Disk Defragmenter program groups the fragmented files together on your hard disk drive to improve PC performance.
- This does not affect the location of files and folders on your PC

### Process

1. Open the **Windows Task Manager** by pressing the Ctrl key, the Alt key, and the Delete key at the same time
2. On the **Applications tab**, select all the programs that are listed, and then click **End Task**. Close the Task Manager
3. Click **Start**, choose **All Programs**, **Accessories**, **System Tools**, and then click **Disk Defragmenter**
4. In the Volume column, select the hard disk drive you want to defragment, and then click Defragment

If Disk Defragmenter repeatedly starts, a hidden background program is still accessing the hard disk drive. Restart the PC in Safe Mode and run the Disk Defragmenter program again

1. Click **Start**, **Turn Off Computer**, and then **Restart**
2. Press the **F8 key** as soon as the first logo screen appears
3. On the Windows Advanced Options menu, use the arrow keys to select **Safe Mode** and press the Enter key
4. Press the Enter key again to select the operating system
5. Log on to Windows. When the Desktop message appears, click Yes to continue in Safe Mode
6. After Windows starts, use the previous procedure to run the Disk Defragmenter program

## Checking for Hard Disk Drive Errors

- Perform the following procedure to check the integrity of the hard disk drive in Windows XP. Close all open programs before beginning the disk check.

1. Click **Start**, and then click **My Computer**
2. In the window that opens, right-click the hard disk drive that you want to check, and click **Properties**.
3. In the Properties window, click the **Tools tab**.
4. Under **Error-checking**, click **Check Now**.
5. If desired, click the check box next to `Automatically fix file system errors and Scan for and attempt recovery of bad sectors`
6. Click **Start**. If prompted to **restart**, click Yes to restart the PC

## Recommended Maintenance Schedule

![](/pcmt/1pcmt1.png)
![](/pcmt/1pcmt2.png)

## Questions

1. Write Down in few word what you understand PC Maintenance?
2. Write Down step of Scheduling Disk Clean-up to run automatically (MID-03M)
3. Write Down step of Removing Unused Programs ? (MID-03M)
4. Explain Disk Defragmenter Program in your word with step? (MID-03M)
5. Explain What is Creating Data Backup Discs (MID-05M)
6. Checking for Hard Disk Drive Errors (MID-05M)
7. Explain Recommended Maintenance Schedule (Daily bases , Weekly bases , Monthly bases , Quarterly bases (seasonally)

---
