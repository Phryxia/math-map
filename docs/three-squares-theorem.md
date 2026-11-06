# Gauss 세 제곱수 정리

# 개요

**Gauss 세 제곱수 정리(Gauss's three-square theorem)** 는 어떤 정수가 제곱수 세 개의 합인지를 판정하는 정리다. $7$ 은 제곱수 세 개의 합으로 쓸 수 없고 $15$, $23$, $28$ 도 마찬가지인데, 이렇게 막히는 수를 모두 가려내는 규칙이 있는지가 문제다. 답은 $4^{a}(8b+7)$ 꼴이 아닌 음이 아닌 정수가 모두 표현된다는 것이고, 제외되는 수는 $8$ 로 나눈 나머지 계산에서 바로 나온다.

# 직관

[Lagrange 네 제곱수 정리](four-squares-theorem.md)에 따르면 모든 음이 아닌 정수는 제곱수 네 개의 합이다. 세 개로 줄이면 $7$ 이 걸린다. $7$ 이하의 제곱수는 $0,1,4$ 뿐이고 셋을 골라 더하면 $0,1,2,3,4,5,6,8,9,12$ 가운데 하나여서 $7$ 이 나오지 않는다.

$7$ 이 막히는 까닭은 $8$ 로 나눈 나머지에 있다. 제곱수를 $8$ 로 나눈 나머지는 $0,1,4$ 뿐이므로 셋을 더해 얻는 나머지는 $0,1,2,3,4,5,6$ 이고 $7$ 만 빠진다. $15,23,31$ 도 같은 이유로 막힌다. 여기에 $4$ 를 곱한 $28,60$ 처럼 $4$ 의 거듭제곱을 붙인 수도 함께 빠진다.

반대로 이 꼴을 피한 수는 $6=4+1+1$, $14=9+4+1$, $21=16+4+1$ 처럼 모두 세 제곱수의 합으로 적힌다.

# 정의

음이 아닌 정수 $n$ 이 **세 제곱수의 합(sum of three squares)** 이라는 것은

$$
n=x^2+y^2+z^2
$$

를 만족하는 정수 $x,y,z$ 가 있다는 뜻이다. 부호와 순서를 구별한 표현의 개수를 $r_3(n)=\char35{}\lbrace(x,y,z)\in\mathbb Z^3:x^2+y^2+z^2=n\rbrace$ 로 쓴다. $5=(\pm1)^2+(\pm2)^2+0^2$ 에서 $0$ 의 자리 셋과 나머지 두 자리의 배치 둘, 부호 넷을 세면 $r_3(5)=24$ 이고, $r_3(7)=0$ 이다.

# 성질

## 정리의 진술

Gauss 세 제곱수 정리. 음이 아닌 정수 $n$ 이 세 제곱수의 합인 것은 $n$ 이 $4^{a}(8b+7)$ 꼴이 아닌 것과 동치다. 여기서 $a,b$ 는 음이 아닌 정수다.

## 제외 조건의 증명

제곱수는 $8$ 을 법으로 $0,1,4$ 중 하나다. 셋의 합이 만드는 나머지를 모두 적으면 $7$ 이 없으므로 $n\equiv7\pmod 8$ 인 $n$ 은 세 제곱수의 합이 아니다.

$4\mid n$ 인 경우는 하강으로 줄인다. 제곱수는 $4$ 를 법으로 $0$ 이나 $1$ 이고 셋의 합이 $0$ 이 되는 것은 셋 다 $0$ 일 때뿐이므로 $x,y,z$ 가 모두 짝수다. 양변을 $4$ 로 나누면 $n/4$ 도 세 제곱수의 합이다. 되풀이하면 $4^{a}(8b+7)$ 꼴이 전부 제외된다.

## 역방향

제외 조건을 피하는 $n$ 이 실제로 표현된다는 쪽은 Legendre 가 먼저 주장했고 Gauss 가 *Disquisitiones Arithmeticae* 에서 증명했다[^1]. Gauss 의 증명은 행렬식이 $1$ 인 양의 정부호 삼변수 이차형식이 모두 $x^2+y^2+z^2$ 와 동치라는 사실을 쓰고, $n$ 을 표현하는 형식을 만드는 단계에서 [이진 이차형식](binary-quadratic-forms.md)의 유형 이론을 쓴다.

## 표현 개수와 유형수

제곱인자가 없는 $n\gt4$ 에 대해 $h(d)$ 를 판별식 $d$ 인 이진 이차형식의 유형수라 하면 다음이 성립한다[^2].

$$
r_3(n)=\begin{cases}12\thinspace h(-4n)&n\equiv1,2\pmod 4\cr 24\thinspace h(-n)&n\equiv3\pmod 8\cr 0&n\equiv7\pmod 8\end{cases}
$$

$n=5$ 이면 판별식 $-20$ 의 형식이 $x^2+5y^2$ 와 $2x^2+2xy+3y^2$ 둘이므로 $r_3(5)=12\cdot2=24$ 다. $h$ 가 양수이므로 이 공식에서도 역방향이 나온다. Siegel 정리(Siegel's theorem)가 $h(-n)\gg n^{1/2-\varepsilon}$ 를 주므로 표현의 개수가 $n$ 과 함께 커진다.

## 표현의 등분포

$n\not\equiv0,4,7\pmod 8$ 인 $n$ 이 커질 때 표현 $(x,y,z)/\sqrt n$ 이 단위구면 위에서 [등분포](equidistribution.md)한다. Linnik 이 보조 합동 조건 아래 에르고딕 방법으로 보였고, Duke 가 Iwaniec 의 반정수 무게 모듈러 형식 Fourier 계수 추정을 써서 조건 없이 증명했다[^3].

# 활용

- Siegel–Weil 공식. $x^2+y^2+z^2$ 는 그 종(genus)에 유형이 하나뿐이므로 [Siegel–Weil 공식](siegel-weil.md)의 종 평균이 곧 $r_3(n)$ 이고, 위의 류수 표현은 그 국소 밀도 곱을 계산한 결과다.
- 삼각수 정리. $8n+3$ 이 세 제곱수의 합이라는 것에서 모든 정수가 삼각수 세 개의 합이라는 Gauss 의 결과가 나온다. $8n+3$ 의 표현에서 세 좌표가 모두 홀수여야 하기 때문이다.

[^1]: C. F. Gauss, *Disquisitiones Arithmeticae*, Leipzig, 1801, 291 절.
[^2]: Jean-Pierre Serre, *A Course in Arithmetic*, Springer, 1973, 4 장 부록.
[^3]: H. Iwaniec, "Fourier coefficients of modular forms of half-integral weight", Invent. Math. 87 (1987), 385–401. W. Duke, "Hyperbolic distribution problems and half-integral weight Maass forms", Invent. Math. 92 (1988), 73–90.

# 연관 문서

## 선수지식

- [Lagrange 네 제곱수 정리](four-squares-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #combinatorics
