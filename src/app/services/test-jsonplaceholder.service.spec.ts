import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TestJSONPlaceholderService } from './test-jsonplaceholder.service';

describe('TestJSONPlaceholderService', () => {
  let service: TestJSONPlaceholderService;
  let httpClientSpy: {get: jasmine.Spy};
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TestJSONPlaceholderService(httpClientSpy as any);
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(TestJSONPlaceholderService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return expected data', () => {
    const expectedData = [
      {id: 1, name: 'A'},
      {id: 2, name: 'B'}
    ];
    httpClientSpy.get.and.returnValue(of(expectedData))
    service.getUsers();
    expect(service.users?.length).toBe(2);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada')
  });
  it('should return an error when the server return a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getUsers();
    expect(service.users).toBeUndefined();
  })
});
