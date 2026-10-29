# Farey 수열

# 개요

**Farey 수열(Farey sequence)** 은 $0$ 과 $1$ 사이에서 분모가 정해진 수 $n$ 이하인 기약분수를 크기순으로 늘어놓은 수열이다. $n=5$ 이면 다음 열한 개다.

$$
\tfrac01,\ \tfrac15,\ \tfrac14,\ \tfrac13,\ \tfrac25,\ \tfrac12,\ \tfrac35,\ \tfrac23,\ \tfrac34,\ \tfrac45,\ \tfrac11
$$

[실수](real-numbers.md) 하나를 분모가 $5$ 이하인 분수로 가장 가깝게 나타내려면 이 열에서 그 수를 사이에 둔 두 이웃을 보면 된다. 이웃한 두 분수 $a/b\lt c/d$ 는 항상 $bc-ad=1$ 을 만족하므로, 두 분수 사이의 간격과 다음에 끼어들 분수가 분모만으로 정해진다.

# 직관

위 열에서 이웃한 두 분수의 분자와 분모를 엇갈려 곱해 빼 본다. $\frac14,\frac13$ 에서 $4\cdot 1-1\cdot 3=1$, $\frac25,\frac12$ 에서 $5\cdot 1-2\cdot 2=1$, $\frac35,\frac23$ 에서 $5\cdot 2-3\cdot 3=1$ 이다. 이웃의 간격은 $\frac{c}{d}-\frac ab=\frac{bc-ad}{bd}=\frac1{bd}$ 이 된다.

$n$ 을 $5$ 에서 $6$ 으로 올리면 $\frac16$ 과 $\frac56$ 이 새로 들어간다. $\frac16$ 은 $\frac01$ 과 $\frac15$ 사이에 들어가고, 분자끼리 분모끼리 더한 $\frac{0+1}{1+5}$ 이다. $\frac56$ 도 $\frac45$ 와 $\frac11$ 사이의 $\frac{4+1}{5+1}$ 이다. 새 분수는 언제나 이웃 두 분수의 분자와 분모를 각각 더해서 나온다.

# 정의

$n\ge 1$ 에 대해 **$n$ 차 Farey 수열** $F_n$ 은 다음 집합을 크기순으로 늘어놓은 것이다.

$$
F_n=\left\lbrace \frac ab : 0\le a\le b\le n,\ \gcd(a,b)=1\right\rbrace
$$

$F_n$ 에서 바로 붙어 있는 두 항을 **이웃(Farey neighbors)** 이라 한다. 두 분수 $a/b$, $c/d$ 에 대해 $(a+c)/(b+d)$ 를 **중간수(mediant)** 라 한다. $a/b\lt c/d$ 이면 중간수는 두 수 사이에 있다.

$F_n$ 의 항의 개수는 Euler 함수(Euler's totient function) $\varphi$ 로 적힌다.

$$
\vert F_n\vert=1+\sum_{k=1}^{n}\varphi(k)\sim\frac{3n^2}{\pi^2}
$$

# 성질

## 이웃 정리

$a/b\lt c/d$ 가 $F_n$ 의 이웃이면 $bc-ad=1$ 이고 $b+d\gt n$ 이다.

증명의 요지. $\gcd(a,b)=1$ 이므로 [유클리드 알고리즘](euclidean-algorithm.md)의 Bézout 항등식으로 $bx-ay=1$ 인 정수 $x,y$ 가 있고, $y$ 에 $b$ 의 배수를 더해 $n-b\lt y\le n$ 으로 맞출 수 있다. 그러면 $x/y$ 는 $F_n$ 의 항이고 $a/b$ 보다 크다. $a/b\lt h/k\lt x/y$ 인 $h/k$ 가 있다면 다음 부등식에서 $k\ge b+y\gt n$ 이 되어 모순이다.

$$
\frac1{by}=\frac xy-\frac ab=\Big(\frac xy-\frac hk\Big)+\Big(\frac hk-\frac ab\Big)\ge\frac1{ky}+\frac1{bk}=\frac{b+y}{bky}
$$

따라서 $x/y$ 가 $a/b$ 의 바로 다음 항이다. $b+y\gt n$ 도 $y\gt n-b$ 에서 나온다.

역으로 $0\le a/b\lt c/d\le 1$ 이 $bc-ad=1$ 을 만족하면, 두 분수는 $\max(b,d)\le n\lt b+d$ 인 모든 $n$ 에서 $F_n$ 의 이웃이다.

## 중간수의 등장

$a/b\lt c/d$ 가 $F_n$ 의 이웃이면, 두 분수 사이에 들어가는 분수 가운데 분모가 가장 작은 것은 중간수 $(a+c)/(b+d)$ 다. 이 분수는 $F_{b+d}$ 에서 처음 나타나고 $a/b$, $c/d$ 와 각각 이웃이 된다. 직관 절의 $\frac16$ 과 $\frac56$ 이 그 예다.

$0/1$ 과 $1/0$ 에서 시작해 이웃한 두 분수 사이에 중간수를 넣는 일을 되풀이하면 모든 양의 유리수가 기약분수 꼴로 정확히 한 번씩 나온다. 이 이진 나무를 Stern–Brocot 나무(Stern–Brocot tree)라 한다. 한 유리수에 이르는 경로에서 왼쪽과 오른쪽으로 연달아 꺾는 횟수가 그 수의 [연분수](continued-fractions.md) 전개의 몫이다.

## 다음 항의 계산

이웃 정리에서 $F_n$ 의 연속한 두 항 $a/b$, $c/d$ 로 그다음 항 $p/q$ 가 정해진다. $k=\lfloor (n+b)/d\rfloor$ 라 두면 $p=kc-a$, $q=kd-b$ 다.

```javascript
// F_n 의 항을 순서대로 낸다
function* farey(n) {
  let [a, b, c, d] = [0, 1, 1, n];
  yield [a, b];
  while (c <= n) {
    const k = Math.floor((n + b) / d);
    [a, b, c, d] = [c, d, k * c - a, k * d - b];
    yield [a, b];
  }
}
```

## 유리수 근사

실수 $\alpha\in\lbrack 0,1\rbrack$ 과 $n\ge 1$ 에 대해 $q\le n$ 이고 다음을 만족하는 기약분수 $p/q$ 가 있다.

$$
\left\vert\alpha-\frac pq\right\vert\le\frac1{q(n+1)}
$$

증명의 요지. $\alpha$ 를 사이에 둔 $F_n$ 의 이웃 $a/b\le\alpha\le c/d$ 를 잡고 중간수로 구간을 둘로 나눈다. $\alpha$ 가 왼쪽 절반에 있으면 $\vert\alpha-a/b\vert\le\frac{a+c}{b+d}-\frac ab=\frac1{b(b+d)}\le\frac1{b(n+1)}$ 이고, 오른쪽이면 $c/d$ 로 같은 계산을 한다. 이는 Dirichlet 근사 정리(Dirichlet's approximation theorem)의 한 형태다.

## Ford 원

유리수 $p/q$ 마다 점 $(p/q,1/(2q^2))$ 을 중심으로 하고 반지름이 $1/(2q^2)$ 인 원을 실수축 위에 그린다. 이 원을 Ford 원(Ford circle)이라 한다. 기약분수 $p/q$ 와 $r/s$ 의 Ford 원은 $\vert ps-qr\vert=1$ 일 때 접하고 그 밖에는 겹치지 않는다. 그러므로 Farey 수열의 이웃은 접하는 Ford 원의 쌍과 같다.

# 활용

- [Diophantine 근사](diophantine-approximation.md)의 Dirichlet 근사 정리를 위 유리수 근사의 성질로 증명한다.
- [원법](circle-method.md)은 적분 구간 $\lbrack 0,1\rbrack$ 을 분모가 작은 유리수 근방으로 나눌 때 Farey 수열의 중간수를 경계로 쓴다. Hardy 와 Littlewood 의 원래 분할이 이 꼴이다.
- Franel–Landau 정리(Franel–Landau theorem)는 [Riemann 가설](riemann-hypothesis.md)이 Farey 수열의 항 $f_j$ 와 등간격 점 $j/\vert F_n\vert$ 의 차이의 합이 $O(n^{1/2+\varepsilon})$ 인 것과 동치라는 정리다.[^1]
- 모듈러 군 $\mathrm{SL}\_2(\mathbb Z)$ 의 원소는 이웃 조건 $bc-ad=1$ 을 만족하는 두 분수의 분자와 분모를 늘어놓은 [행렬](matrices.md)로 나타난다. Farey 테셀레이션(Farey tessellation)은 이 대응으로 상반평면을 삼각형으로 나눈다.

[^1]: G. H. Hardy, E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Oxford University Press (2008), Ch. III. Farey 수열의 정의, 이웃 정리, 중간수, Ford 원. Franel–Landau 정리는 J. Franel, "Les suites de Farey et le problème des nombres premiers", *Göttinger Nachrichten* (1924), 198–201 과 E. Landau 의 같은 호 논문.

# 연관 문서

## 선수지식

- [유클리드 알고리즘](euclidean-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics #algorithms
