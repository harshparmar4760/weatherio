/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

const api_key = "da54df377cd6f531fd5861d847ba687e";

/**
 * fetch data from server
 * @param {string} URL API url  
 * @param {Function} callback callback 
 */

export const fetchData = function(URL, callback){
    fetch('${URL}&appid=${api_key}')
        .then(res => res.json())
        .then(data => callback(data));
}