export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    isAdmin: boolean,
}

export interface IPost {
    id: number,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    published: boolean,
    author: IUser,
    authorId?: number,
}

export const exampleData: IPost[] = [
    {
        'id': 123,
        'createdAt': 'ABCDEFGHIJKLMNOPQR',
        'updatedAt': 'ABCDEFGHIJKLMNOPQRSTUVWXYZAB',
        'title': 'ABCDEFGHIJKLMNOPQRSTUVWXYZAB',
        'content': 'ABCDEFGHIJKLMNOPQRSTUVWXY',
        'published': true,
        'author': {
            'id': 0,
            'email': 'ABCDEFGHIJKLMNOPQRSTUVWXYZA',
            'firstName': 'ABCDEFGHIJKLMNOPQ',
            'lastName': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'createdAt': 'ABCDEFGHI',
            'isAdmin': true
        }
    },
    {
        'id': 1234,
        'createdAt': 'ABCD',
        'updatedAt': 'ABCDEFGHI',
        'title': 'ABCDEFGHIJKLMNOPQRSTUVWXYZA',
        'content': 'ABCDEFGHIJKL',
        'published': false,
        'author': {
            'id': 1,
            'email': 'ABCDEFGHIJK',
            'firstName': 'ABCDEFGHIJKLMNOPQR',
            'lastName': 'ABCDEFGHIJKLMNOPQRSTUV',
            'createdAt': 'ABCDEFGHIJKLMNOP',
            'isAdmin': true
        }
    },
    {
        'id': 14323,
        'createdAt': 'ABCDEFGHIJKLMNO',
        'updatedAt': 'ABCDEFGHIJK',
        'title': 'ABCDEFGHIJKLMNOP',
        'content': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'published': true,
        'author': {
            'id': 2,
            'email': 'ABCDEFGHIJKLMNOPQ',
            'firstName': 'ABCDEFGHIJKLMNOPQR',
            'lastName': 'ABCDEFGHIJKLMNO',
            'createdAt': 'ABCDEFGHIJKLMNOPQRST',
            'isAdmin': false
        }
    },
    {
        'id': 123123123,
        'createdAt': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'updatedAt': 'ABCDEFGHIJKLMNOPQRSTUV',
        'title': 'ABCDEFGHIJKLMNOPQRSTUVWXYZABC',
        'content': 'ABCDEFGHIJKLM',
        'published': false,
        'author': {
            'id': 3,
            'email': 'ABCDEFGHIJKLMNO',
            'firstName': 'ABCDEFGHI',
            'lastName': 'ABCD',
            'createdAt': 'ABCDEFGHIJ',
            'isAdmin': false
        }
    },
    {
        'id': 4444,
        'createdAt': 'ABCDEFGHIJKLMNO',
        'updatedAt': 'ABCDEFGHIJK',
        'title': 'ABCDEFGHIJKLMNOP',
        'content': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'published': true,
        'author': {
            'id': 78,
            'email': 'ABCDEFGHIJKLMNOPQ',
            'firstName': 'ABCDEFGHIJKLMNOPQR',
            'lastName': 'ABCDEFGHIJKLMNO',
            'createdAt': 'ABCDEFGHIJKLMNOPQRST',
            'isAdmin': false
        }
    }
];

export function fetchPosts(): Promise<{ data: IPost[] }> {
    return new Promise<{ data: IPost[] }>((resolve) =>
        setTimeout(() => resolve({ data: exampleData }), 500)
    );
}