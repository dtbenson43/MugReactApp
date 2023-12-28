import fs from 'fs';
import path from 'path';

// List of files and folders to delete
const itemsToDelete = [
    'src/api/git_push.sh',
    'src/api/.npmignore',
    'src/api/.gitignore',
    // 'path/to/directory1',
    // Add more files or directories here
];

itemsToDelete.forEach(item => {
    const fullPath = path.join(process.cwd(), item);
    if (fs.existsSync(fullPath)) {
        if (fs.lstatSync(fullPath).isDirectory()) {
            fs.rmdirSync(fullPath, { recursive: true });
            console.log(`Deleted directory: ${fullPath}`);
        } else {
            fs.unlinkSync(fullPath);
            console.log(`Deleted file: ${fullPath}`);
        }
    } else {
        console.log(`Item not found: ${fullPath}`);
    }
});

console.log('Cleanup complete.');