import fs from 'fs';
import path from 'path';

// recursive function to get all files in a directory
export const getFiles = (dir: string, files_: string[] = []) => {
   const files = fs.readdirSync(dir);
   for (const file of files) {
      const name = path.join(dir, file);
      if (fs.statSync(name).isDirectory()) {
         getFiles(name, files_);
      } else {
         files_.push(name);
      }
   }
   return files_;
};

// recursive function to make array of numbers from a given range
export const range = (start: number, end: number, step: number = 1): number[] => {
   return start < end ? [start, ...range(start + step, end, step)] : [start];
};
