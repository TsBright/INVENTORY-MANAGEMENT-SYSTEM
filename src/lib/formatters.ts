const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
})

const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  hour: 'numeric',
  hour12: true,
  minute: '2-digit',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
})

const toDate = (date: string | Date): Date => {
  const parsedDate = date instanceof Date ? date : new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    throw new RangeError(`Invalid date: ${String(date)}`)
  }

  return parsedDate
}

const getDatePart = (date: Date, type: Intl.DateTimeFormatPartTypes): string => {
  const part = dateFormatter.formatToParts(date).find(({ type: partType }) => partType === type)
  return part?.value ?? ''
}

export const formatFCFA = (amount: number): string => {
  if (!Number.isFinite(amount)) {
    throw new RangeError(`Invalid amount: ${String(amount)}`)
  }

  return `${numberFormatter.format(amount)} FCFA`
}

export const formatDate = (date: string | Date): string => {
  const parsedDate = toDate(date)
  return `${getDatePart(parsedDate, 'day')} ${getDatePart(parsedDate, 'month')} ${getDatePart(parsedDate, 'year')}`
}

export const formatDateTime = (date: string | Date): string => {
  const parsedDate = toDate(date)
  const dateParts = dateFormatter.formatToParts(parsedDate)
  const timeParts = dateTimeFormatter.formatToParts(parsedDate)
  const getPart = (parts: Intl.DateTimeFormatPart[], type: Intl.DateTimeFormatPartTypes): string =>
    parts.find(({ type: partType }) => partType === type)?.value ?? ''

  return `${getPart(dateParts, 'day')} ${getPart(dateParts, 'month')} ${getPart(dateParts, 'year')}, ${getPart(timeParts, 'hour')}:${getPart(timeParts, 'minute')} ${getPart(timeParts, 'dayPeriod').toUpperCase()}`
}

export const formatSKU = (raw: string): string =>
  raw
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
