import { PDFDocument, StandardFonts, type PDFFont, type PDFPage } from 'pdf-lib'

import { formatDateTime, formatFCFA } from './formatters'

export interface ReceiptBusinessDetails {
  name: string
  address?: string
  phone?: string
  taxId?: string
}

export interface ReceiptItem {
  name: string
  quantity: number
  unitPrice: number
  total?: number
}

export interface SaleReceiptData {
  id?: string
  date?: string | Date
  business: ReceiptBusinessDetails
  cashierName: string
  customerName?: string
  items: ReceiptItem[]
  subtotal: number
  tax: number
  grandTotal: number
  paymentMethod: string
}

const PAGE_WIDTH = 226.77
const PAGE_HEIGHT = 640
const MARGIN = 18
const BODY_SIZE = 8
const SMALL_SIZE = 7
const LINE_HEIGHT = 12

const drawRightAligned = (
  page: PDFPage,
  text: string,
  x: number,
  y: number,
  font: PDFFont,
  size: number,
): void => {
  page.drawText(text, {
    x: x - font.widthOfTextAtSize(text, size),
    y,
    font,
    size,
  })
}

const drawSeparator = (page: PDFPage, y: number): void => {
  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: PAGE_WIDTH - MARGIN, y },
    thickness: 0.5,
  })
}

export const generateReceiptPDF = async (saleData: SaleReceiptData): Promise<Uint8Array> => {
  const pdf = await PDFDocument.create()
  const regularFont = await pdf.embedFont(StandardFonts.Helvetica)
  const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold)
  const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT])
  const rightEdge = PAGE_WIDTH - MARGIN
  let y = PAGE_HEIGHT - MARGIN

  page.drawText(saleData.business.name, {
    x: MARGIN,
    y,
    font: boldFont,
    size: 13,
  })
  y -= 16

  for (const line of [
    saleData.business.address,
    saleData.business.phone && `Tel: ${saleData.business.phone}`,
    saleData.business.taxId && `Tax ID: ${saleData.business.taxId}`,
  ].filter((line): line is string => Boolean(line))) {
    page.drawText(line, { x: MARGIN, y, font: regularFont, size: SMALL_SIZE })
    y -= LINE_HEIGHT
  }

  y -= 4
  drawSeparator(page, y)
  y -= 16

  page.drawText(`Receipt: ${saleData.id ?? 'N/A'}`, {
    x: MARGIN,
    y,
    font: regularFont,
    size: BODY_SIZE,
  })
  y -= LINE_HEIGHT
  page.drawText(`Date: ${formatDateTime(saleData.date ?? new Date())}`, {
    x: MARGIN,
    y,
    font: regularFont,
    size: BODY_SIZE,
  })
  y -= LINE_HEIGHT
  page.drawText(`Cashier: ${saleData.cashierName}`, {
    x: MARGIN,
    y,
    font: regularFont,
    size: BODY_SIZE,
  })
  if (saleData.customerName) {
    y -= LINE_HEIGHT
    page.drawText(`Customer: ${saleData.customerName}`, {
      x: MARGIN,
      y,
      font: regularFont,
      size: BODY_SIZE,
    })
  }

  y -= 8
  drawSeparator(page, y)
  y -= 16
  page.drawText('ITEM', { x: MARGIN, y, font: boldFont, size: SMALL_SIZE })
  drawRightAligned(page, 'TOTAL', rightEdge, y, boldFont, SMALL_SIZE)
  y -= LINE_HEIGHT

  for (const item of saleData.items) {
    const itemTotal = item.total ?? item.quantity * item.unitPrice
    page.drawText(`${item.quantity} x ${item.name}`, {
      x: MARGIN,
      y,
      font: regularFont,
      size: BODY_SIZE,
      maxWidth: PAGE_WIDTH - MARGIN * 2 - 55,
    })
    drawRightAligned(page, formatFCFA(itemTotal), rightEdge, y, regularFont, BODY_SIZE)
    y -= LINE_HEIGHT
    page.drawText(`@ ${formatFCFA(item.unitPrice)}`, {
      x: MARGIN + 12,
      y,
      font: regularFont,
      size: SMALL_SIZE,
    })
    y -= LINE_HEIGHT
  }

  y -= 4
  drawSeparator(page, y)
  y -= 16

  for (const [label, amount] of [
    ['Subtotal', saleData.subtotal],
    ['Tax', saleData.tax],
  ] as const) {
    page.drawText(label, { x: MARGIN, y, font: regularFont, size: BODY_SIZE })
    drawRightAligned(page, formatFCFA(amount), rightEdge, y, regularFont, BODY_SIZE)
    y -= LINE_HEIGHT
  }

  page.drawText('TOTAL', { x: MARGIN, y, font: boldFont, size: 11 })
  drawRightAligned(page, formatFCFA(saleData.grandTotal), rightEdge, y, boldFont, 11)
  y -= 18
  page.drawText(`Payment: ${saleData.paymentMethod}`, {
    x: MARGIN,
    y,
    font: regularFont,
    size: BODY_SIZE,
  })
  y -= 28
  page.drawText('Thank you for your business.', {
    x: MARGIN,
    y,
    font: boldFont,
    size: BODY_SIZE,
  })

  return pdf.save()
}
