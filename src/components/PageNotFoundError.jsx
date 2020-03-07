import React from 'react';

const PageNotFoundError = () => {

    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <section className="">
                        <div className="">
                            <div className="one-third">
                                <div className="error-container">
                                    <span className="error_type">404</span>
                                    <span className="error_text">Page not found</span>
                                </div>
                            </div>

                            <div className="two-third">
                                <div className="container">
                                    <p>The page you’ve requested could not be found or it was already removed from the database. </p>
                                    <p>If you believe that this is an error, please kindly <a href="#!">contact us</a>. Thank you!</p>
                                    <p>You can go <a href="#!">back home</a> or try using the search. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PageNotFoundError;