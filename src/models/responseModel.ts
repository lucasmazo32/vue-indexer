export interface HitModel {
  "@timestamp": string;
  _id: string;
  _index: string;
  _score: number;
  _type: string;
  _source: Record<string, string>;
}

export interface ResponseModel {
  hits: {
    hits: Array<HitModel>;
    max_score: number;
    total: { value: number };
  };
  timed_out: boolean;
  took: number;
  _shards: Record<string, any>;
}
