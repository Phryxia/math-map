# Waring 문제

# 개요

Waring 문제는 모든 자연수를 $k$ 제곱수 몇 개의 합으로 쓸 수 있는지 묻는다. $k=2$ 에서 답은 넷이다. $k=3$ 에서는 아홉이 필요한 수가 있지만 그런 수는 둘뿐이고, 충분히 큰 수에는 일곱이면 된다. 이 문제는 모든 수를 덮는 개수 $g(k)$ 와 충분히 큰 수만 덮는 개수 $G(k)$ 를 나누어 잰다.

# 직관

모든 자연수가 제곱수 넷의 합이라는 것은 Lagrange 가 증명했다. 세제곱수로 바꾸면 몇 개가 드는가. $23$ 을 써 보자. $27\gt 23$ 이므로 쓸 수 있는 세제곱수는 $1$ 과 $8$ 뿐이다. $8$ 을 셋 쓰면 $24$ 로 넘치고, 둘 쓰면 $23-16=7$ 이 남아 $1$ 을 일곱 개 더해 모두 아홉 개다. $8$ 을 하나만 쓰면 $1$ 이 열다섯 개 들어 더 나빠진다. 그러므로 $23$ 에는 아홉 개가 든다.

$1000$ 근처에서는 사정이 다르다. $1000$ 이하의 세제곱수가 $1,8,27,64,125,216,343,512,729,1000$ 으로 열 개 있어서 골라 쓸 여지가 넓다. $1001=729+216+27+27+1+1$ 로 여섯 개면 된다. $23$ 에 아홉 개가 든 것은 쓸 수 있는 세제곱수가 둘뿐이었기 때문이다.

그래서 두 질문이 갈린다. 모든 자연수를 덮으려면 몇 개가 필요한가, 그리고 작은 수 몇 개를 예외로 두고 충분히 큰 수만 덮으려면 몇 개가 필요한가. 세제곱수에서 앞의 답은 아홉이고 뒤의 답은 일곱 이하다.

# 정의

$g(k)$ 는 모든 자연수 $n$ 에 대해

$$
n=x_1^k+x_2^k+\dots+x_s^k,\qquad x_i\ge0
$$

를 만족하는 정수 $x_i$ 가 있게 하는 최소의 $s$ 다. $G(k)$ 는 같은 식이 충분히 큰 모든 $n$ 에서 풀리게 하는 최소의 $s$ 다. 곧 유한 개의 예외를 허용한 $g(k)$ 가 $G(k)$ 이고, 정의에서 $G(k)\le g(k)$ 다.

# 성질

## Hilbert 정리

모든 $k\ge1$ 에 대해 $g(k)$ 는 유한하다[^1].

증명의 요지. 각 $k$ 에 대해 양의 유리수 $c_j$ 와 정수 $a_{ji}$ 가 있어

$$
(x_1^2+x_2^2+x_3^2+x_4^2)^{k}=\sum_{j=1}^{N}c_j(a_{j1}x_1+a_{j2}x_2+a_{j3}x_3+a_{j4}x_4)^{2k}
$$

가 성립한다. 좌변에 Lagrange 의 네 제곱수 정리를 넣으면 $m^{k}$ 꼴이 $2k$ 제곱수의 유리계수 합이 되고, 분모를 치우는 조작과 $k$ 에 대한 귀납으로 유한 개의 $k$ 제곱수로 모든 수를 쓴다. 이 증명은 필요한 항의 개수를 명시하지 않는다.

## g(k) 의 하한

$q=\lfloor(3/2)^k\rfloor$ 로 두고 $n=2^kq-1$ 을 본다. $n\lt 3^k$ 이므로 $n$ 을 쓸 때 쓸 수 있는 $k$ 제곱수는 $1$ 과 $2^k$ 뿐이다. $2^k$ 를 가장 많이 쓰면 $q-1$ 개이고 남는 $2^k-1$ 을 $1$ 로 채우므로 항이 $2^k+q-2$ 개다. 따라서

$$
g(k)\ge 2^k+\lfloor(3/2)^k\rfloor-2
$$

이다. $k=3$ 에서 $q=3$, $n=23$ 이고 하한은 $9$ 다. $k=4$ 에서 $q=5$, $n=79$ 이고 하한은 $19$ 다.

## 알려진 g 의 값

$g(2)=4$, $g(3)=9$, $g(4)=19$ 다. $g(3)=9$ 에서 아홉 항이 드는 수는 $23$ 과 $239$ 뿐이다. $g(4)=19$ 는 Balasubramanian, Deshouillers, Dress 가 증명했다[^2].

$2^k$ 와 $(3/2)^k$ 의 소수부가 조건

$$
2^k\lbrace(3/2)^k\rbrace+\lfloor(3/2)^k\rfloor\le 2^k
$$

을 만족하면 위 하한이 등호가 된다. 여기서 $\lbrace x\rbrace$ 는 소수부다. Mahler 는 이 조건이 깨지는 $k$ 가 유한 개임을 증명했고[^3], $k\le 471600000$ 에서는 계산으로 확인됐다[^2].

## G(k) 의 하한

합동 제약이 하한을 준다. 세제곱수는 $9$ 를 법으로 $0,1,-1$ 중 하나이므로 셋의 합은 $\pm4$ 가 되지 못한다. $n\equiv\pm4\pmod 9$ 인 $n$ 이 무한히 많으므로 $G(3)\ge4$ 다. 네제곱수는 $16$ 을 법으로 $0$ 이나 $1$ 이고, 같은 방식의 계산이 $k=2^m$, $m\ge2$ 에서 $G(k)\ge2^{m+2}$ 를 준다. 합동 제약이 없어도 $G(k)\ge k+1$ 이 성립한다.

## G(k) 의 상계

[원법](circle-method.md)이 $s\gt 2^k$ 에서 $r_s(n)$ 의 점근식을 주므로 $G(k)\le 2^k+1$ 이다. 부 호 추정에 Weyl 의 부등식 대신 [Vinogradov 평균값 정리](vinogradov-mean-value.md)를 넣으면 $G(k)\ll k\log k$ 로 내려간다. 작은 $k$ 에서는 $G(2)=4$, $G(4)=16$ 이 정확한 값이고, 후자는 Davenport 의 결과다[^4]. $G(3)\le7$ 은 Linnik 이 증명했다[^5].

# 활용

- **원법의 시험대.** [원법](circle-method.md)의 주 호 계산과 부 호 추정이 Waring 문제에서 먼저 다듬어졌고, 특이급수 $\mathfrak S(n)$ 의 양성 판정이 국소 해에서 전역 해를 얻는 전형이 됐다.
- **지수합 추정의 기준.** Vinogradov 의 평균값 정리는 $G(k)$ 의 상계를 내리려는 목적에서 나왔고, 그 최적 지수가 Wooley 의 효율적 합동법과 Bourgain–Demeter–Guth 의 분해 정리로 증명됐다[^6].
- **Waring–Goldbach 문제.** 변수 $x_i$ 를 [소수](primes.md)로 제한한 변종이고, 주 호 계산에 Siegel–Walfisz 정리가 들어간다는 점이 삼소수 정리와 같다.

[^1]: D. Hilbert, "Beweis für die Darstellbarkeit der ganzen Zahlen durch eine feste Anzahl n-ter Potenzen (Waringsches Problem)", Math. Ann. 67 (1909), 281–300.
[^2]: R. Balasubramanian, J.-M. Deshouillers, F. Dress, "Problème de Waring pour les bicarrés", C. R. Acad. Sci. Paris 303 (1986), 85–88, 161–163.
[^3]: K. Mahler, "On the fractional parts of the powers of a rational number II", Mathematika 4 (1957), 122–124.
[^4]: H. Davenport, "On Waring's problem for fourth powers", Ann. of Math. 40 (1939), 731–747.
[^5]: Yu. V. Linnik, "On the representation of large numbers as sums of seven cubes", Mat. Sb. 12 (1943), 218–224.
[^6]: T. D. Wooley, "The cubic case of the main conjecture in Vinogradov's mean value theorem", Adv. Math. 294 (2016), 532–561. J. Bourgain, C. Demeter, L. Guth, "Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three", Ann. of Math. 184 (2016), 633–682.

# 연관 문서

## 선수지식

- [원법](circle-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
