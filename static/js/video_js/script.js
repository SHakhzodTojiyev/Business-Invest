const inputComment = document.querySelector('#input_comment');
const inputCommentButton = document.querySelector('#input_comment_button');

const commentLists = document.querySelector('#comment_lists');
const commentList = document.querySelector('#comment_list');
const commentText = document.querySelector('.comment__text');

const active = false;

if(!active) {
inputComment.addEventListener('click', () => {
    inputComment.textContent = '';
    inputComment.style.color = '#111';
})
} 

function createComment() {
    const newComment = document.createElement("li");
    newComment.className = 'comments';

    const newCommentText = document.createTextNode(`${inputComment.value}`);
    newComment.appendChild(newCommentText);
    document.commentLists.insertBefore(newComment, commentLists);
    console.log(newComment);
}

inputCommentButton.addEventListener('click', createComment)

