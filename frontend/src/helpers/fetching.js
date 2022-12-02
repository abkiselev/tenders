import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

export const getTenders = async () => {
  try {
    const tenders = await axios.get(`${BASE_URL}/tenders`)
    return tenders.data.reverse()
  } catch (error) {
    return error
  }
}

export const addTender = async (data) => {
  try {
    const tender = await axios.post(`${BASE_URL}/tenders`, data)
    console.log(tender.data)
    return tender.data
  } catch (error) {
    return error
  }
}
