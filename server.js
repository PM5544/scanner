import { stdin, stdout } from 'process';
import { writeFile } from 'fs/promises';

stdin.setEncoding('utf8');

stdin.on('data',(d) => {
  const orderNumber = d.replace(/\W/, '');
  const orderDateTime = new Date().toUTCString()
  writeFile(`./orders/${orderNumber}.txt`, orderDateTime, 'utf8').then(() => {
    console.log(`written file ${orderNumber}.txt`);
  });
  stdout.write(d);
});
