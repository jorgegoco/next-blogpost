export default function getFormattedDate(dateString: string): string {
  if (!dateString) {
    return ''
  }
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}