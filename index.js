document.querySelector('.ham2').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
        document.querySelector('.sidebar').classList.toggle('sidebargo')
        if(document.querySelector('.sidebar').classList.contains('sidebargo')){
            document.querySelector('.ham1').style.display = 'inline';
            document.querySelector('.ham2').style.display = 'none';
        }
        else{
            document.querySelector('.ham1').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.ham2').style.display = 'inline';
            }, 500);
        }
})
