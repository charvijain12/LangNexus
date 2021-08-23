import {InputMode} from './translate.state';

export class FlipTranslationDirection {
  static readonly type = '[Translate] Flip Translation Direction';
}

export class SetInputMode {
  static readonly type = '[Translate] Set Input Mode';

  constructor(public mode: InputMode) {
  }
}


export class SetSpokenLanguage {
  static readonly type = '[Translate] Set Spoken Language';

  constructor(public language: string) {
  }
}

export class SetSignedLanguage {
  static readonly type = '[Translate] Set Signed Language';

  constructor(public language: string) {
  }
}

export class SetSpokenLanguageText {
  static readonly type = '[Translate] Set Spoken Language Text';

  constructor(public text: string) {
  }
}

export class SetSignedLanguageVideo {
  static readonly type = '[Translate] Set Signed Language Video';

  constructor(public url: string) {
  }
}

export class CopySignedLanguageVideo {
  static readonly type = '[Translate] Copy Signed Language Video';
}


export class ShareSignedLanguageVideo {
  static readonly type = '[Translate] Share Signed Language Video';
}

export class DownloadSignedLanguageVideo {
  static readonly type = '[Translate] Download Signed Language Video';
}


export class ChangeTranslation {
  static readonly type = '[Translate] Change Translation';
}
