import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="sam" timeAgo="Today at 4.00PM" bodyText="hello afsdfdsfdsf" imageSrc={faker.image.avatar()} />
            <CommentDetail author="pam" timeAgo="Today at 2.00AM" bodyText="hai afsdfdsfdsf" imageSrc={faker.image.avatar()} />
            <CommentDetail author="nam" timeAgo="Yesterday at 6.00PM" bodyText="how afsdfdsfdsf" imageSrc={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));