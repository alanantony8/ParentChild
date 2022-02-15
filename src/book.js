import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../src/materialize.css';

const Book = () => {

  const [data, setData] = useState('');
  var options = {
    method: 'GET',

    url: 'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/books',
    headers: { 'api-key': 'f2179c8ed544cc833dd20e7bb4ae2a95' },

  };

  useEffect(() => {
    console.log('check here')
    axios.request(options).then(function (response) {
      const obj = {}

      console.log("books---", response.data.data);

      const allUsers = [];
      obj['message'] = "success";
      obj['chapter'] = response.data.data

      const objArray = {}
      const a = response.data.data

      console.log(obj, 'obj')
      setData(obj)
    }).catch(function (error) {
      let obj = {};
      obj['meesage'] = 'error';
      setData(obj);
      console.error(error);
    })

  }, []);

  useEffect(() => {
    console.log(data, 'useeffect')
  }, [data])


  console.log(data, 'data here');
  const navigate = useNavigate();
  return (
    <>
      <strong>Response:</strong>
      {data?.chapter?.map(datum => (

        <div class="col s12 m7">
          <h4 class="header"> 
            {datum.id}</h4>
          <div class="card horizontal">
            <div class="card-image">
              <p>{datum.abbreviation}</p>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>{datum.nameLong}</p>
              </div>
              <div class="card-action">
                <a href="#" onClick={() => { navigate('/chapters/' + datum.id) }}>view</a>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

export default Book;