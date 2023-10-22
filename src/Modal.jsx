import { useState } from "react";

export const Modal = ( { children } ) => {

    const [ shouldShow, setShouldShow ] = useState( false );
    return (
        <>
            <button className="btn btn-primary "
                onClick={ () => setShouldShow( true ) }
                type="button">
                Show Modal</button >
            { shouldShow &&
                <>

                    <div className="container-fluid d-flex justify-content-center bg-dark"
                        onClick={ () => setShouldShow( false ) }>

                        <div className="modal-content"
                            style={ { width: "18rem" } }
                            onClick={ ( event ) => event.stopPropagation() }>

                            <button
                                onClick={ () => setShouldShow( false ) }
                                type="button"
                                class="btn btn-primary"
                            >Hide</button>

                            { children }
                        </div>

                    </div>
                </>
            }
        </>
    );
};
