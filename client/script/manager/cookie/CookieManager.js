/**
 * Created by Administrator on 2015/12/3.
 */

if(!this.nc) this.nc = {};

nc.CookieManager = new (function()
{
    this.getCookie = function (name)
    {
        if (document.cookie.length>0)
        {
            start=document.cookie.indexOf(name + "=")
            if (start!=-1)
            {
                start=start + name.length+1
                end=document.cookie.indexOf(";",start)
                if (end==-1) end=document.cookie.length
                return decodeURI(document.cookie.substring(start,end))
            }
        }
        return ""
    }

    this.setCookie = function(name,value,expiredays)
    {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=name+ "=" +encodeURI(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }

    function checkCookie()
    {
        username=getCookie('username')
        if (username!=null && username!="")
        {alert('Welcome again '+username+'!')}
        else
        {
            username=prompt('Please enter your name:',"")
            if (username!=null && username!="")
            {
                setCookie('username',username,365)
            }
        }
    }
})();
