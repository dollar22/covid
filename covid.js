#!/usr/bin/env node

import request from "request";
import cheerio from "cheerio";
import chalk from 'chalk';
request('https://www.worldometers.info/coronavirus/', function (error, response, body) {
 if(error){
    console.error('error:', error); 
 } else{
     handlehtml(body);
 }

});

function handlehtml(html){
    let selectTools = cheerio.load(html);
    let contentArr = selectTools("#maincounter-wrap span");
    let totalcases = selectTools(contentArr[0]).text();
    console.log(chalk.gray("Total cases: "+totalcases));
    let recoverdcases = selectTools(contentArr[1]).text();
    console.log(chalk.red("Total deaths: ",recoverdcases));
    let deaths = selectTools(contentArr[2]).text();
   console.log(chalk.green("Total recover: ", deaths));

}
