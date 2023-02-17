document.getElementById('submitDate').addEventListener('click', getFetch)

function getFetch(){
    const userInput = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?date=${userInput}&api_key=DDnpe5s41lBmaWJDLg3TDjiNXE3qe8ObUUYlAWmX`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)

          // display name of media file
          document.getElementById('name').innerText = data.title
          // display explanation text
          document.getElementById('description').innerText = data.explanation

          if (data.media_type == 'image') {
            document.querySelector('img').style.display = 'block'
            document.querySelector('img').src = data.url
            // hide any video from previous query
            document.querySelector('iframe').style.display = 'none'
          } else if (data.media_type == 'video') {
            document.querySelector('iframe').style.display = 'block'
            document.querySelector('iframe').src = data.url
            // hide any image from previous query
            document.querySelector('img').style.display = 'none'
          }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }