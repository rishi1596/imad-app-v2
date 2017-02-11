
var submit = document.getElementById('submitcomment');

submit.onclick = function()
{
    var request = new XMLHttpRequest();
    
    request.onreadystateChange = function()
    {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var allcomments = '';
                for(var i = 0; i<comments.length ; i++)
                {
                    allcomments = '<li>' + comments[i] + '</li>';
                }
                var list = document.getElementById('commentlist');
                list.innerHTML = allcomments;
            }
        }
    }
    
var usercomment = document.getElementById('comment');
var comment = usercomment.value;

reuest.open('GET','http://rishi1596.imad.hasura-app.io/article-comment?comment=' + comment,true);
request.send(null);
};