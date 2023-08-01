from pytest import mark

import pytest

from app.roman_numerals import parse


roman_numerals = [
  ('IX', 9),
  ('X', 10),
  ('XI', 11),
  ('XIV', 14),
  ('XIX', 19),
  ('XX', 20),
  ('XXXIV', 34),
  ('XLI', 41),
  ('L', 50),
  ('XCIX', 99),
  ('C', 100),
  ('CCCXXXIII', 333),
  ('DLV', 555),
  ('CDXLIX', 449),
  ('MCMLXXII', 1972),
]

@mark.parametrize("roman, numeral", roman_numerals)
def test_roman_numeral_parse(roman,numeral):
    value = parse(roman)
    assert(value) == numeral
