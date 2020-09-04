<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="public/assets/Subtract.svg" alt="Project logo"></a>
</p>

<h1 align="center">ito.sh</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Want to become your Tia and call everything -ito, even your website!? Well, you came to the right place
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Built Using](#built_using)
- [Usage](#usage)
- [Deployment](#deployment)
- [System Design](#system_design)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 📟 About <a name = "about"></a>

A website dedicated to the shortening your URLs! You can either provide your own custom alias or if the alias is left blank it will randomly generate one for you. 

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Node.js](https://nodejs.org/en/) - Server Environment
  - [Express](https://expressjs.com/) - Server Framework
  - [monk](https://automattic.github.io/monk/) - MongoDB driver for Node.js
  - [yup](https://github.com/jquense/yup) - Object validator
  - [nanoid](https://github.com/ai/nanoid) - ID generator
- [VueJs](https://vuejs.org/) - Web Framework




## 🔑 Usage <a name="usage"></a>
<img src="public/assets/alias.jpg">

1) Type in the URL that you want to shorten
2) Type in custom alias you want to use
3) New shorten URL copy and you can start using it! <br>
❌ **if custom alias is taken it will warn you!**
4) If user does not want to use a custom URL leave alias input blank and it will generate one for you!

<img src="public/assets/alias_blank.jpg">

1) The input for alias was left blank and it created a random alias for the user


### **Full Run Through**
<img src="public/assets/ito.gif">

## 🚀 Deployment <a name = "deployment"></a>
I am utilizing AWS services for deployment and continous delivery 
The services I am uing are:

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - Deployment
- [AWS CodePipeline](https://aws.amazon.com/codepipeline/) - Continous Delivery



## 🏭 System Design <a name = "system_design"></a>

<img src="public/assets/SystemDesign.svg">

### **Errors**💀
<img src="public/assets/system2.svg">

## ✍️ Authors <a name = "authors"></a>

- [@omaralaniz](https://github.com/omaralaniz) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspiration - [@CodingGarden](https://github.com/w3cj)