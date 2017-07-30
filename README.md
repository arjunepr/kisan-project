##Kisan Project

Project tested in node 7.10.0 and 8.2.1

### Instructions

1. Clone the repo. Make sure it's the master branch.

2. Install dependencies with either 
```
  yarn install
```

  or

```
  npm install
```

3. Run the development version through 

```
  npm start
```

  or

```
  yarn start
```

4. To build for production, just use the build command in the package.json file

```
  npm run build
```

  or

```
  yarn run build
```

Note that the development version needs the files to be hosted on a server with the 'images' files in the root directory. This is a consequence of a certain technicality in stylus-loader. Being pressed on time, I decided not to delve too deep into a workaround. 

For your convenience however, I've set up a [live version](https://arjunepr.github.io/kisan-project) 


### NOTE

A copy of this project can be found in [this](https://github.com/arjunepr/kisan-project) repo.

You can access a live version of this project [here](https://arjunepr.github.io/kisan-project)

I'll admit that at first I did take the project somewhat lightly... and nearly failed to finish it by the deadline. I'm sure this project could use some optimizations, but I'm sure you'd be satsified with what you see here. 

I've used stylus as my CSS pre-processor, and webpack as my build tool. I've used Autoprefixer-stylus to automatically add prefixes on build.

Note that I've made use of a modified version of my weback [template](https://github.com/arjunepr/webpack-wannabe-template)

I haven't used any front-end JavaScript library here. The task was simple enough to be achieved with vanilla JavaScript. 

Additionally, I did try to get the navbar opening and closing animated, but with the deadline close by I decided that what I've done would be enough. The worst thing I could do is over-optimize my project and miss my chance to submit it.

I avoided jQuery because in 2017 it's considered unprofessional. It has its uses, but for a coding challenge I do prefer to go without it. 

Yarn is my package manager of choice and babel is my JavaScript transpiler.


All images I've used are 100% free, from [pexels](https://www.pexels.com/)

Thanks for taking the time to go through this.