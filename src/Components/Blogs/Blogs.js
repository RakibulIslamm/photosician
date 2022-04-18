import React from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const questionsAns = [
        {
            id: 1,
            question: 'Difference between authorization and authentication',
            ans: 'Authentication is the beginning step of a security system. It validates user identity by verifying their credentials. Authentication is the system of verifying the credentials using passwords, apps, biometrics or one time passwords; if the user’s credentials suit the stored data withins the system, then best the user gets access.'
        },
        {
            id: 2,
            question: "Why are you using firebase? What other options do you have to implement authentication?",
            ans: "Google firebase offers several options that pitch it as the go-to backend development tool for internet and mobile apps. Firebase give us a quick, intuitive sign-in process withFirebase Authentication. It Allow users to register in your app with their Facebook, Twitter, Google,or GitHub account. It supports authentication using passwords, phone numbers, common united identity providers like Google, Facebook and Twitter, and more."
        },
        {
            id: 3,
            question: "What other services does firebase provide other than authentication?",
            ans: "There are many services Firebase provides, some of them are: Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config"
        }

    ]
    return (
        <div className=' min-h-screen'>
            <div className='px-[80px] max-w-[1920px] mx-auto py-8 grid grid-cols-2 gap-8'>
                {
                    questionsAns.map(data => <Blog key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Blogs;