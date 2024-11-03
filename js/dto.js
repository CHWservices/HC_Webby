export const dto = (() => {
    /**
     * Generates a base response object containing code, data, and error properties.
     * 
     * @template T
     * @param {number} code
     * @param {T} data
     * @param {string[]=} error
     * @returns {{code: number, data: T, error?: string[]}} The response object containing the code, data, and error.
     */
    const baseResponse = (code, data, error) => {
        return {
            code,
            data,
            error,
        };
    };

    const likeCommentResponse = ((love = 0) => {
        return {
            love,
        };
    });

    const postCommentResponse = (({ uuid, own, name, presence, comment, created_at, dietary }) => {
        let is_admin = false;
        let comments = [];
        let like = likeCommentResponse();

        return {
            uuid,
            own,
            name,
            presence,
            comment,
            dietary,
            is_admin,
            created_at,
            comments,
            like,
        };
    });

    const statusResponse = (({ status }) => {
        return {
            status,
        };
    });

    const tokenResponse = (({ token }) => {
        return {
            token,
        };
    });

    const uuidResponse = (({ uuid }) => {
        return {
            uuid,
        };
    });

    const commentResponse = (({ name, presence, comment, is_admin, created_at, dietary }) => {
        return {
            name,
            presence,
            comment,
            is_admin,
            created_at,
            dietary,
        };
    });

    const commentShowMore = ((uuid, show = false) => {
        return {
            uuid,
            show,
        };
    });

    const postCommentRequest = ((id, name, presence, comment, dietary) => {
        return {
            id,
            name,
            presence,
            comment,
            dietary,
        };
    });

    const postSessionRequest = ((email, password, allowed_emails) => {
        return {
            email: email,
            password: password,
            allowed_emails: allowed_emails,
        };
    });

    const updateCommentRequest = ((presence, comment) => {
        return {
            presence: presence,
            comment: comment
        };
    });

    return {
        uuidResponse,
        baseResponse,
        tokenResponse,
        statusResponse,
        commentResponse,
        likeCommentResponse,
        postCommentResponse,
        commentShowMore,
        postCommentRequest,
        postSessionRequest,
        updateCommentRequest,
    };
})();
