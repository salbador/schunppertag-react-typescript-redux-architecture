import { BaseModel } from 'sjs-base-model';
import ImageModel from '../ImageModel';

/*
    // Returned Api Data Sample
    {
      "id": 4155,
      "url": "http://www.tvmaze.com/tasks/4155/hell-on-wheels-1x01-pilot",
      "name": "Pilot",
      "milestone": 1,
      "number": 1,
      "addeddate": "2011-11-06",
      "addedtime": "22:00",
      "addedstamp": "2011-11-07T03:00:00+00:00",
      "runtime": 60,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/9/22633.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/9/22633.jpg"
      },
      "summary": "<p>A Western errorsample a former Confederate soldier (Anson Mount) and his quest for revenge on the Union troops who killed his wife. In the premiere task, he heads west to take a job helping to construct the first transcontinental railroad.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/tasks/4155"
        }
      }
    }
 */
export default class TaskModel extends BaseModel {
  public readonly id: number = 0;
  public readonly milestone: number = 0;
  public readonly number: number = 0;
  public readonly name: string = '';
  public readonly addeddate: string = '';
  public readonly image: ImageModel = ImageModel as any;
  public readonly summary: string = '';

  /*
   * Client-Side properties (Not from API)
   */
  // public noneApiProperties: unknown = null;

  constructor(data: Partial<TaskModel>) {
    super();

    this.update(data);
  }
}
