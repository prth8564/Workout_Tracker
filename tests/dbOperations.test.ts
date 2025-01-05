import  client from '../src/database/DBclient.js'
import {getUsers} from '../src/database/operations.js';
jest.mock('../src/database/DBclient',() => ({
    query:jest.fn()
}));

describe("getUsers" , () =>{
    it("should return DB data" , async () =>{
        const mockEmail = 'test@example.com';
    const mockUser = {
      email: 'test@example.com',
      password_hash: 'hashed_password',
      user_id: 'user123',
    };
    (client.query as jest.Mock).mockResolvedValue({rows:mockUser})

    const user = await getUsers(mockEmail);
    expect(client.query).toHaveBeenCalledWith(`Select u.email,u.password_hash,u.user_id from users u where u.email = '${mockEmail}'`);
    expect(user).toEqual(mockUser);
    })
})