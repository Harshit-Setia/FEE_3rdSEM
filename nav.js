class shead extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div id="nav">
            <div id="left">
                <div>
                    <a href="index.html" target="_top" style="display: flex;">
                        MEAL<br>&nbsp;MATE
                        <img src="images/Logo.png" height="60px">
                    </a>
                </div>
                
            </div>
            <div id="mid">
                <a href="table.html" target="_top">Meal Plan</a> 
                <a href="food.html" target="_top">BROWSE FOOD</a> 
                <a href="aboutus.html" target="_top">About Us</a>  
            </div>
            <div id="right" style="text-align: right; height: 100%; padding-top: 10px; padding-right: 5px;">
                <a href="signup.html" target="_top" style="color:hsl(20, 100%, 30%); font-weight:bold; font-size:25px; ">SIGN UP</a><br> 
                <a href="login.html" target="_top" style="font-size:10px; color:hsl(0, 0%, 35%); ">Already a member? sign in</a>
            </div>
            <div id="dropdown">
                <button style="background: hsl(0, 0%, 63%); border: none;"><img src="images/menu_32dp_993300_FILL0_wght400_GRAD0_opsz40.svg" alt="Menu"></button>
                <div id="content">
                    <a href="table.html" target="_top" style="color:hsl(0, 0%, 35%); font-weight:bold; font-size:20px;">Meal Plan</a> 
                    <a href="table.html" target="_top" style="color:hsl(0, 0%, 35%); font-weight:bold; font-size:20px;">BROWSE FOOD</a> 
                    <a href="aboutus.html" target="_top" style="color:hsl(0, 0%, 35%); font-weight:bold; font-size:20px;">About Us</a> 
                    <a href="signup.html" target="_top" style="color:hsl(20, 100%, 30%); font-weight:bold; font-size:25px;">SIGN UP</a> 
                    <a href="login.html" target="_top" style="font-size:10px; color:hsl(0, 0%, 35%);">Already a member? sign in</a>
                </div>
            </div>
        </div>`
    }
}

customElements.define('s-head',shead);