//this is NOT a complete syntax highlighter
Prism.languages.wr={
  comment:/#\..+/,
  string:/"([^"\\]|\\[^])*"/,
  boolean:/[TF]/,
  punctuation:/[[\]{}();]/,
  entity:/#[^ \n;".[\]\\(){}@#TF?]+/,
  keyword:/[^ 0-9\n;".[\]\\(){}@#TF?]+/,
  function:/@/,
  number:/[0-9]+(\.[0-9]+)?(e_?[0-9]+)?|\.[0-9]+(e_?[0-9]+)?|oo/,
}