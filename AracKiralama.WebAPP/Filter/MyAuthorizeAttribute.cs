using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Net.Http;
using System.Threading;
using System.Web;
using System.Web.UI.WebControls;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
namespace AracKiralama.WebAPP.Filter
{
    public class MyAuthorizeAttribute: AuthorizationFilterAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(System.Net.HttpStatusCode.Unauthorized);
            }
            else
            {
                var tokenKey = actionContext.Request.Headers.Authorization.Parameter;
                //fgurdal:123456
                var userNamePassword = Encoding.UTF8.GetString(Convert.FromBase64String(tokenKey));
                var userInfoArray = userNamePassword.Split(':');
                var userName = userInfoArray[0];
                var password = userInfoArray[1];
                if (Login.UserNameAndPassword(userName, password))
                {
                    Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity(userName), null);
                }
                else
                {
                    actionContext.Response = actionContext.Request.CreateResponse(System.Net.HttpStatusCode.Unauthorized);
                }
            }
        }
    }
}