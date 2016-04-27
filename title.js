/**
 * Created by dinghanyu on 4/25/16.
 */
window.onresize = resizefont;
function resizefont() {
    var c = document.getElementById('title_text');
    var ctx = c.getContext('2d');
    var str = "Welcome to day9011\'s HomePage!";
    var width_cps;
    c.width = window.innerWidth;
    ctx.textAlign = "center";
    if (window.innerWidth > 768) {
        c.height = 50;
        width_cps = 250;
        ctx.clearRect(0,0,c.width,c.height);//need clear canvas
        ctx.font = "italic bold 30px MirocraftYaHei, Arial";
    } else {
        c.height = 30;
        width_cps = 170;
        ctx.clearRect(0,0,c.width,c.height);
        ctx.font = "italic bold 20px MirocraftYaHei, Arial";//set font after width
    }
    var grd = ctx.createLinearGradient(0, 0, c.width, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(0.5, "pink");
    grd.addColorStop(1.0, "red");
    ctx.strokeStyle = grd;
    ctx.strokeText(str, c.width / 2 - width_cps, (c.height/2) + 10);
}