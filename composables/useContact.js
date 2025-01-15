export const useContact = () => {
  return useAsyncData(
    'contact-global',
    () => $fetch('http://localhost:1337/api/contacts?populate=*')
  )
} 