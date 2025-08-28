import fs from 'fs';
import path from 'path';

async function globalTeardown() {
    // Set your folder where downloads happen
    const folderPath = process.cwd(); // If files are in the project root


    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);

        for (const file of files) {
            if (file.endsWith('.xlsx')) { //  Match only Excel files
                const filePath = path.join(folderPath, file);

                fs.unlinkSync(filePath); //  Delete the file

            }
        }
    }
}

export default globalTeardown;