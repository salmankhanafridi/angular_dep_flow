import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from './data';

describe('Data', () => {
  let service: Data;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // <-- Add this
      providers: [Data]                     // <-- Make sure your service is provided
    });

    service = TestBed.inject(Data);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 it('getAllUsers should return data', () => {
    const mockUsers = [
      { id: 122, name: 'Salman' },
      { id: 222, name: 'John' }
    ];

    service.getAllUsers().subscribe((users) => {

      console.log('Received users:', users);
      expect(users).toEqual(mockUsers);
    });

    const req = testingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers); 
  });

   it("updateUser should return data", () => {
    const mockUsers = [
      { id: 1, name: 'khan' },
      { id: 222, name: 'John' }
    ];

    service.updateUser("Updated Name", 1).subscribe((users) => {
      console.log('Received users:', users);
      expect(users).toEqual(mockUsers);
    });

    const req = testingController.expectOne('https://jsonplaceholder.typicode.com/er/1');
    expect(req.request.method).toBe('PUT');
    req.flush(mockUsers); 
  });

  afterEach(() => {
    testingController.verify(); // verify no unmatched requests
  });
});
