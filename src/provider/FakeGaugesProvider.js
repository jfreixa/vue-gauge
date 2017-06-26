import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/toArray'

export default class FakeGaugesProvider {
  static week () {
    return Observable.from([
      {
        id: 1,
        completedSteps: 1,
        totalSteps: 29,
        name: 'Prospectie'
      },
      {
        id: 2,
        completedSteps: 0,
        totalSteps: 18,
        name: 'Appointment'
      },
      {
        id: 3,
        completedSteps: 0,
        totalSteps: 12,
        name: 'Offer'
      },
      {
        id: 4,
        completedSteps: 0,
        totalSteps: 4,
        name: 'Signature'
      }
    ]).toArray()
  }

  static month () {
    return Observable.from([
      {
        id: 1,
        completedSteps: 1,
        totalSteps: 123,
        name: 'Prospectie'
      },
      {
        id: 2,
        completedSteps: 0,
        totalSteps: 75,
        name: 'Appointment'
      },
      {
        id: 3,
        completedSteps: 0,
        totalSteps: 51,
        name: 'Offer'
      },
      {
        id: 4,
        completedSteps: 0,
        totalSteps: 19,
        name: 'Signature'
      }
    ]).toArray()
  }

  static quarter () {
    return Observable.from([
      {
        id: 1,
        completedSteps: 28,
        totalSteps: 373,
        name: 'Prospectie'
      },
      {
        id: 2,
        completedSteps: 16,
        totalSteps: 228,
        name: 'Appointment'
      },
      {
        id: 3,
        completedSteps: 16,
        totalSteps: 153,
        name: 'Offer'
      },
      {
        id: 4,
        completedSteps: 6,
        totalSteps: 57,
        name: 'Signature'
      }
    ]).toArray()
  }

  static year () {
    return Observable.from([
      {
        id: 1,
        completedSteps: 307,
        totalSteps: 1500,
        name: 'Prospectie'
      },
      {
        id: 2,
        completedSteps: 101,
        totalSteps: 1080,
        name: 'Appointment'
      },
      {
        id: 3,
        completedSteps: 113,
        totalSteps: 617,
        name: 'Offer'
      },
      {
        id: 4,
        completedSteps: 75,
        totalSteps: 230,
        name: 'Signature'
      }
    ]).toArray()
  }
}
