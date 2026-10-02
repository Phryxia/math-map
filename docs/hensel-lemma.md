# Hensel 보조정리

# 개요

Hensel 보조정리는 법 $p$ 의 근 하나를 [$p$ 진 정수](p-adic-numbers.md)환의 근으로 올린다. 올릴 수 있는지는 그 근에서 도함수가 단원인지가 정한다.

증명이 [Newton 법](newton-method.md)의 반복이고, 그 반복을 그대로 돌리는 것이 계산기 대수의 표준 절차다.

# 직관

$\mathbb Z_7$ 에서 $x^2=2$ 를 푼다. 법 $7$ 에서 $3^2=9\equiv2$ 이므로 $a_0=3$ 이 근이고, 다음 자리는 해를 $a_1=3+7t$ 로 놓아 구한다. 법 $49$ 에서 $(3+7t)^2=9+42t+49t^2\equiv9+42t$ 이므로 $42t\equiv-7\pmod{49}$ 이고, 양변을 $7$ 로 나누면 $6t\equiv-1\pmod7$ 이다. $6$ 이 법 $7$ 에서 가역이므로 $t\equiv1$ 이 유일하게 정해지고 $a_1=10$ 이며 $10^2=100=2+2\cdot49$ 다.

매 단계에서 푸는 것은 계수가 $2a$ 인 일차합동식 하나다. $2a$ 는 $f(x)=x^2-2$ 의 도함수 값이므로, 올리기를 막는 것은 $f'(a)$ 가 법 $p$ 에서 가역이 아닌 경우뿐이다. $p=2$ 에서는 $f'(x)=2x$ 가 언제나 $2$ 로 나누어지므로 이 계산이 한 단계도 나아가지 못한다.

# 정의

## 올리기

$f\in\mathbb Z_p\lbrack x\rbrack$ 와 $a\in\mathbb Z_p$ 가 $f(a)\equiv0\pmod{p^k}$ 를 만족하면 $a$ 를 $f$ 의 **법 $p^k$ 근**이라 한다. $\alpha\equiv a\pmod{p^k}$ 이면서 $f(\alpha)=0$ 인 $\alpha\in\mathbb Z_p$ 를 찾는 것이 **올리기**다.

## 단순근

$f'(a)$ 가 $\mathbb Z_p$ 의 단원, 곧 $\vert f'(a)\vert\_p=1$ 이면 $a$ 를 $f$ 의 **단순근**이라 한다. 직관 절의 $a_0=3$ 이 그런 근이다.

# 성질

## Hensel 보조정리

> $f\in\mathbb Z_p\lbrack x\rbrack$ 이고 $a\in\mathbb Z_p$ 가 $\vert f(a)\vert\_p\lt \vert f'(a)\vert\_p^2$ 를 만족하면, $f(\alpha)=0$ 이고 $\vert\alpha-a\vert\_p\lt \vert f'(a)\vert\_p$ 인 $\alpha\in\mathbb Z_p$ 가 유일하게 있다.[^1]

$a$ 가 단순근이면 $\vert f'(a)\vert\_p^2=1$ 이므로 조건이 $f(a)\equiv0\pmod p$ 로 줄어든다. 이것이 가장 많이 쓰는 형태다.

증명의 요지는 Newton 반복이다. $a\_{n+1}=a_n-f(a_n)/f'(a_n)$ 으로 두고 Taylor 전개

$$
f(a+h)=f(a)+f'(a)h+h^2g(a,h),\qquad g\in\mathbb Z_p\lbrack x,y\rbrack
$$

에 $h=-f(a)/f'(a)$ 를 넣으면 $f(a\_{n+1})$ 의 첫 두 항이 소거되고 남는 것이 $h^2g$ 다. 그러므로

$$
\vert f(a\_{n+1})\vert\_p\ \le\ \frac{\vert f(a_n)\vert\_p^2}{\vert f'(a_n)\vert\_p^2}
$$

이고 가정의 부등식이 이 비를 $1$ 보다 작게 만든다. 초거리 부등식이 $\vert f'(a\_{n+1})\vert\_p=\vert f'(a_n)\vert\_p$ 를 주므로 비가 매 단계 제곱되고, $\lbrace a_n\rbrace$ 이 Cauchy 수열이 되어 완비인 $\mathbb Z_p$ 에서 수렴한다. 유일성은 두 근의 차를 인수분해해 얻는다.

## 이차 수렴

오차의 부치가 매 단계 두 배가 되므로 $n$ 단계 뒤 정확한 자릿수가 $2^n$ 규모다. 실수에서 Newton 법의 수렴은 초깃값에 달려 있지만, $p$ 진에서는 조건 $\vert f(a)\vert\_p\lt \vert f'(a)\vert\_p^2$ 하나가 수렴을 보장한다. [축약사상 고정점 정리](banach-fixed-point.md)를 완비체에 적용하는 것과 같다.

## 성립 범위

증명이 쓰는 것은 완비성과 초거리 부등식뿐이므로, 같은 진술이 완비 [이산부값환](discrete-valuation-rings.md) 전부에서 성립한다. 형식적 멱급수환 $k\lbrack\lbrack t\rbrack\rbrack$ 이 그런 예이고, 거기서는 올리기가 계수를 차수 순으로 결정하는 계산이 된다.

## $\mathbb Q_p$ 에서의 따름

- $p$ 가 홀소수일 때 $a\in\mathbb Z_p^\times$ 가 $\mathbb Q_p$ 에서 제곱원소일 필요충분조건은 $a\bmod p$ 가 $\mathbb F_p$ 의 제곱잉여인 것이고, $\mathbb Q_p^\times/(\mathbb Q_p^\times)^2$ 의 크기가 $4$ 다. $p=2$ 에서는 $f'=2x$ 가 단원이 아니라 한 자리를 더 봐야 하고 크기가 $8$ 이다.
- $x^{p-1}-1$ 의 근이 $\mathbb Z_p$ 안에 $p-1$ 개 있다. Teichmüller 대표원이며 $\mathbb Z_p^\times\cong\mu\_{p-1}\times(1+p\mathbb Z_p)$ 를 준다.
- $\mathbb Q_p$ 의 불분기 확대는 각 차수마다 유일하고, 잉여체 $\mathbb F\_{p^f}$ 를 만드는 다항식을 올려 얻는다. Galois 군이 $\mathbb F\_{p^f}/\mathbb F_p$ 의 것과 같은 순환군이라 국소 유체론이 아벨 이론으로 작동한다.

# 활용

## 올리기 절차

한 자리씩 올리는 절차는 다음과 같다. 나눗셈은 모두 법 $p^{2k}$ 에서 한다.

```javascript
// f, df: 계수 배열로 준 다항식과 그 도함수. a: 법 p^k 의 단순근
function lift(f, df, a, p, k, steps) {
  let mod = p ** k
  for (let i = 0; i < steps; i++) {
    mod = mod * mod                       // 정확한 자릿수가 두 배가 된다
    const inv = modInverse(evalPoly(df, a, mod), mod)
    a = (a - evalPoly(f, a, mod) * inv) % mod
  }
  return a                                 // 법 mod 에서 f(a) = 0
}
```

`modInverse` 는 $f'(a)$ 가 단원이라 언제나 존재하고, 법 $p$ 에서의 역원을 같은 반복으로 올려 구해도 된다.

## 다항식 인수분해

계산기 대수 시스템이 $\mathbb Z\lbrack x\rbrack$ 의 다항식을 인수분해하는 표준 경로가 이 정리다. 적당한 $p$ 를 골라 $\mathbb F_p\lbrack x\rbrack$ 에서 인수분해하고, 그 인수들을 법 $p^k$ 로 올린 뒤 계수 상계를 넘을 때까지 $k$ 를 키워 $\mathbb Z\lbrack x\rbrack$ 의 인수를 복원한다. 인수의 조합을 시험하는 마지막 단계가 지수적이라 [격자](lattices.md) 환원으로 바꾼 것이 LLL(Lenstra–Lenstra–Lovász) 기반 알고리즘이다.

## 정확한 선형대수

정수 행렬의 선형계도 같다. $\mathbb Q$ 에서 Gauss 소거를 하면 중간 계수가 폭발하지만, 법 $p$ 에서 풀고 같은 반복으로 정밀도를 올린 뒤 유리수를 복원하면 자릿수가 통제된다.

## 곡선의 점 세기

[타원곡선](elliptic-curves.md)이나 더 일반적인 방정식에서 $\mathbb F_p$ 의 해가 특이점이 아니면 $\mathbb Z_p$ 의 해로 올라간다. 국소-대역 원리를 다룰 때 유한체에서의 해의 존재만 확인하면 되는 이유가 이것이다.

[^1]: J.-P. Serre, *A Course in Arithmetic*, Springer (1973), II 장 §2. 강한 형태의 진술과 Newton 반복에 의한 증명. 완비 이산부값환으로의 일반화는 J. Neukirch, *Algebraic Number Theory*, Springer (1999), II 장 §4.

# 연관 문서

## 선수지식

- [$p$ 진수](p-adic-numbers.md)

## 더 알아보기

- [Newton 다각형](newton-polygon.md)

#number_theory #algorithms #field_theory
