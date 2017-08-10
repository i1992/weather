
const api = "http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=5205b47951e64997ab615331170708&q=";

const headers = {
  'Accept': 'application/json',

}

export const get = (weathr) =>
  fetch(`${api}${weathr.name}&format=json&date=${weathr.date}&enddate=${weathr.edate}`,{ headers } 

  )

    .then(res => res.json())
    .then(dat => dat.data)
