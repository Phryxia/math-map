# Lehmer–Schur 알고리즘

# 개요

**Lehmer–Schur 알고리즘(Lehmer–Schur algorithm)** 은 원판 안에 다항식의 근이 있는지 묻는 검사를 되풀이해, 근이 든 원판을 점점 작게 줄여 가는 근 찾기 방법이다. 실수 구간의 이분법은 양 끝의 부호가 다르면 그 사이에 근이 있다는 사실로 구간을 반씩 줄인다. 복소평면에는 부호가 없어서 이 사실을 쓸 수 없다. 이 알고리즘은 부호 대신 계수의 사칙연산만으로 원판 안의 근의 유무를 판정하고, 그 판정으로 복소수 근도 이분법처럼 가둔다.

# 직관

$p(z)=z^3-2z-5$ 의 근은 실근 $2.0946$ 과 복소수 근 $-1.0473\pm1.1359i$ 이다. 근을 모른다고 놓고 단위원판 $\lvert z\rvert\lt 1$ 에 근이 있는지를 [Jury 판정법](jury-criterion.md)의 줄이기로 묻는다. 계수를 거꾸로 적고 켤레를 취한 다항식은 $p^\ast(z)=-5z^3-2z^2+1$ 이고, 최고차 항을 지우는 다음 조합은 이차식이다.

$$
-5\thinspace p(z)-1\cdot p^\ast(z)=2z^2+10z+24
$$

상수항 $24=5^2-1^2$ 이 양수라는 것은 $p$ 의 상수항이 최고차 계수보다 절댓값이 크다는 뜻이다. 같은 줄이기를 $2z^2+10z+24$ 에 쓰면 $220z+572$, 그다음은 상수가 되고, 상수항이 모두 양수로 남는다. 그래서 단위원판에는 근이 없다.

반지름 $2$ 의 원판은 $p(2z)=8z^3-4z-5$ 로 단위원판의 물음이 된다. 이번에는 상수항의 제곱 $25$ 가 최고차 계수의 제곱 $64$ 보다 작으므로 근의 곱의 절댓값 $5/8$ 이 $1$ 보다 작고, 원판 안에 근이 있다. 근은 반지름 $1$ 과 $2$ 사이의 고리에 있다.

이 고리를 작은 원판 여덟 개로 덮고 하나씩 검사하면 근이 든 원판 하나가 나온다. 그 원판의 반지름은 $2$ 의 $5/12$ 배다. 그 원판에서 같은 일을 되풀이하면 근이 든 원판의 반지름이 단계마다 절반 이하로 준다.

# 정의

## Schur 변환

$p(z)=\sum_{k=0}^nb_kz^k$ 에 대해 $p^\ast(z)=\sum_{k=0}^n\overline{b_{n-k}}\thinspace z^k$ 로 둔다. **Schur 변환(Schur transform)** 은 다음 다항식이다.

$$
Tp(z)=\overline{b_0}\thinspace p(z)-b_n\thinspace p^\ast(z)
$$

$z^n$ 의 계수 $\overline{b_0}b_n-b_n\overline{b_0}$ 이 $0$ 이므로 $Tp$ 의 차수는 $n-1$ 이하이고, 상수항 $\gamma=\lvert b_0\rvert^2-\lvert b_n\rvert^2$ 은 실수다. 직관 절의 예에서 $b_0=-5$, $b_3=1$ 이고 $Tp=2z^2+10z+24$, $\gamma=24$ 다.

## 단위원판 검사

$p$ 의 단위원판 검사는 $T^kp$ 의 상수항 $\gamma_k=T^kp(0)$ 을 $k=1,2,\dots$ 차례로 계산하는 것이다.

1. $p(0)=0$ 이면 근 $0$ 이 원판 안에 있다.
2. 어떤 $k$ 에서 $\gamma_k\lt 0$ 이면 원판 안에 근이 있다.
3. $\gamma_k\gt 0$ 이 이어지다 $T^kp$ 가 상수가 되면 원판 안에 근이 없다.
4. $\gamma_k=0$ 이면 판정하지 않고, 반지름을 조금 바꿔 다시 검사한다.

원판 $\lvert z-c\rvert\lt r$ 의 검사는 $q(w)=p(c+rw)$ 의 단위원판 검사다. $q$ 의 계수는 [Horner 법](horner-method.md)의 조립제법을 되풀이해 $O(n^2)$ 연산으로 얻고, 검사 자체도 $O(n^2)$ 연산이다.

## 원판 줄이기

원판 $D(c,r)=\lbrace z:\lvert z-c\rvert\lt r\rbrace$ 에 근이 있다고 하자. Lehmer–Schur 알고리즘의 한 단계는 다음이다.[^1]

1. $D(c,r/2)$ 를 검사한다. 근이 있으면 그 원판으로 간다.
2. 없으면 근은 고리 $r/2\le\lvert z-c\rvert\lt r$ 에 있다. 고리를 아래의 원판 여덟 개로 덮고 차례로 검사해, 근이 있는 첫 원판으로 간다.

$$
D\left(c+\rho\thinspace r\thinspace e^{2\pi ik/8},\thinspace\tfrac{5}{12}r\right),\qquad\rho=\frac{3}{4\cos(\pi/8)}=0.8118,\qquad k=0,\dots,7
$$

중심까지의 거리 $\rho r$ 은 덮개 원판의 중심에서 고리 조각의 네 모서리까지의 거리가 같아지도록 정한 것이다. 그 거리는 $0.399r$ 이고, 반지름 $5r/12=0.417r$ 이 이를 넘으므로 여덟 원판이 고리를 덮는다.

시작 원판은 단위원판에서 반지름을 두 배로 늘리거나 반으로 줄이며 정한다. 직관 절의 예에서 $D(0,2)$ 가 시작 원판이고, 첫 단계의 $D(0,1)$ 에는 근이 없다. 덮개 원판 가운데 첫째 $D(1.6236,0.8333)$ 이 실근 $2.0946$ 을 담는다. 이렇게 열네 단계, 검사 38 번 뒤에 원판은 $D(2.09457,0.00003)$ 이다.

```javascript
// hasRoot(c, r): 원판 |z - c| < r 의 검사. 근이 있으면 true
function lehmerSchur(hasRoot, c, r, steps) {
  const rho = 3 / (4 * Math.cos(Math.PI / 8));
  for (let i = 0; i < steps; i++) {
    if (hasRoot(c, r / 2)) {
      r = r / 2;
      continue;
    }
    for (let k = 0; k < 8; k++) {
      const a = (2 * Math.PI * k) / 8;
      const ck = { re: c.re + rho * r * Math.cos(a), im: c.im + rho * r * Math.sin(a) };
      if (hasRoot(ck, (5 * r) / 12)) {
        c = ck;
        r = (5 * r) / 12;
        break;
      }
    }
  }
  return { c, r }; // 근은 이 원판 안에 있다
}
```

# 성질

## 검사의 정당성

정리. $\gamma_1\lt 0$ 이면 $p$ 는 단위원판 안에 근을 갖는다. $\gamma_1\gt 0$ 이면 $p$ 와 $Tp$ 는 단위원판 안의 근의 개수가 같다.[^2]

증명의 요지. 근의 곱의 절댓값은 $\lvert b_0/b_n\rvert$ 이고, $\gamma_1\lt 0$ 이면 이것이 $1$ 보다 작으므로 절댓값이 $1$ 보다 작은 근이 있다. 단위원 위에서는 $\lvert p^\ast(z)\rvert=\lvert p(z)\rvert$ 이다. $\gamma_1\gt 0$ 이면 단위원 위에서 $\lvert b_np^\ast\rvert\lt\lvert\overline{b_0}p\rvert$ 이므로, [Rouché 정리](rouche-theorem.md)로 $\overline{b_0}p$ 와 $Tp$ 는 단위원판 안의 근의 개수가 같다.

$T^kp$ 가 $0$ 이 아닌 상수가 될 때까지 $\gamma$ 가 모두 양수이면, 근의 개수가 상수의 근의 개수 $0$ 과 같으므로 단위원판 안에 근이 없다. 실계수이고 모든 근이 안에 있는지 묻는 Jury 판정법은 같은 줄이기를 다른 물음에 쓴 것이다.

## 선형 수렴

정리. $k$ 단계 뒤 근이 든 원판의 반지름은 $r_0/2^k$ 이하이고, 원판의 중심과 그 안의 근 사이의 거리도 그 이하다.

증명의 요지. 한 단계는 반지름을 $1/2$ 배나 $5/12$ 배로 줄인다.

수렴은 선형이다. 한 단계의 검사는 많아야 아홉 번이라 차수 $n$ 의 다항식에서 한 단계는 $O(n^2)$ 연산이다. 직관 절의 예에서 열네 단계의 반지름은 $2\cdot(5/12)^8(1/2)^6=3\times10^{-5}$ 이고, 중심과 실근의 거리는 $2.0\times10^{-5}$ 이다.

## 전역 수렴

근이 든 원판이 단계마다 그 안에서 정해지므로, 초깃값에 따라 수렴하지 않는 일이 없다. [Newton 법](newton-method.md)과 달리 근 사이를 오가거나 멀리 튀지 않는다. 대신 근에 가까워져도 수렴 차수가 올라가지 않는다.

# 활용

- 다른 반복법의 초깃값. 원판이 충분히 작아지면 그 중심에서 Newton 법이나 [Laguerre 법](laguerre-method.md)으로 바꾸어 빠르게 다듬는다.
- 근의 존재 증명. 원판 검사는 사칙연산과 비교만 쓰므로, [구간 산술](interval-arithmetic.md)이나 유리수로 계산하면 "이 원판 안에 근이 있다" 는 판정 자체가 증명이 된다.
- 근 찾기의 분담. [Jenkins–Traub 알고리즘](jenkins-traub-algorithm.md)과 [Durand–Kerner 법](durand-kerner-method.md)은 근 근처에서 빠르지만 수렴을 보장하는 원판을 주지 않는다. 이 알고리즘은 느리지만 근이 든 원판을 단계마다 준다.

[^1]: D. H. Lehmer, A machine method for solving polynomial equations, Journal of the ACM 8 (1961), 151–162.
[^2]: P. Henrici, Applied and Computational Complex Analysis, Vol. 1, Wiley (1974), §6.10.

# 연관 문서

## 선수지식

- [Jury 판정법](jury-criterion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algorithms #algebra
