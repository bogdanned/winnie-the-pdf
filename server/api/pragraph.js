import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'


export default function(title, text){
  const doc = new PDFDocument
  doc.pipe(fs.createWriteStream( new Date() + 'output.pdf'))
  doc.addPage()
     .fontSize(25)
     .text(title, 100, 100)
     .fontSize(12)
     .text(text, 100, 100)
     .text('The first test for the pdf writting part ......', 200, 100)
     .text('Another test for the writting part ..', 100, 100)


  doc.end()
  return new Date() + 'output.pdf'
}
