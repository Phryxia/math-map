# Durand–Kerner 법

# 개요

**Durand–Kerner 법(Durand–Kerner method)** 은 다항식의 근 $n$ 개를 한꺼번에 근사해 가며 동시에 고치는 반복법이다. $x^3-3x^2+3x-5$ 의 근은 실수 하나와 복소수 둘인데, 근을 하나씩 찾는 방법은 찾은 근으로 다항식을 나누어 가며 다음 근을 찾아야 하고 나눌 때마다 반올림 오차가 남은 다항식에 쌓인다. Durand–Kerner 법은 세 근의 근삿값을 함께 들고 다니며 각 근삿값을 다른 근삿값들로 나눈 보정량만큼 옮겨, 나눗셈 없이 세 근을 함께 얻는다.

# 직관

$p(x)=x^3-3x^2+3x-5=(x-1)^3-4$ 의 근은 $1+\sqrt[3]4\approx2.5874$ 와 $0.2063\pm1.3747i$ 다. [대수학의 기본정리](fundamental-theorem-of-algebra.md)로 근이 세 개 있고 $p(x)=(x-r_1)(x-r_2)(x-r_3)$ 이다.

$z_1$ 이 $r_1$ 근처이고 $z_2$, $z_3$ 이 이미 $r_2$, $r_3$ 과 같다면 $p(z_1)=(z_1-r_1)(z_1-z_2)(z_1-z_3)$ 이므로, $p(z_1)$ 을 $(z_1-z_2)(z_1-z_3)$ 로 나눈 값이 정확히 $z_1-r_1$ 이다. $z_2$, $z_3$ 이 근 근처일 뿐이어도 이 몫만큼 $z_1$ 을 옮기면 $r_1$ 에 가까워진다. 세 근삿값 모두에 같은 계산을 한다.

처음 근삿값을 $1$, $0.4+0.9i$, $(0.4+0.9i)^2=-0.65+0.72i$ 로 두면, 세 근삿값 가운데 근에서 가장 먼 것의 거리는 걸음마다 $1.7$, $0.91$, $0.50$, $0.23$, $2.4\times10^{-2}$, $3.1\times10^{-4}$, $5.3\times10^{-8}$, $1.6\times10^{-15}$ 이다. 처음 네 걸음에서는 근삿값들이 자리를 찾아가고, 그 뒤로는 맞는 자릿수가 걸음마다 두 배가 된다.

# 정의

## Weierstrass 보정

최고차 계수가 $1$ 인 $n$ 차 다항식 $p$ 와 서로 다른 복소수 $z_1,\dots,z_n$ 에 대해 $z_i$ 의 **Weierstrass 보정(Weierstrass correction)** 은 다음 수다.

$$
W_i=\frac{p(z_i)}{\prod_{j\ne i}(z_i-z_j)}
$$

직관 절의 계산은 $n=3$ 에서 $W_1=p(z_1)/((z_1-z_2)(z_1-z_3))$ 이다. $p(z_i)$ 는 [Horner 법](horner-method.md)으로 곱셈 $n$ 번에 계산한다.

## Durand–Kerner 반복

Durand–Kerner 반복은 모든 $i$ 에서 동시에 $z_i\mapsto z_i-W_i$ 로 옮기는 반복이다.

```javascript
// p: 최고차 계수 1 인 다항식의 값을 주는 함수, z: 복소수 근삿값 n 개
// add, sub, mul, div 는 복소수 연산
function durandKerner(p, z, steps) {
  for (let k = 0; k < steps; k++) {
    const next = z.map((zi, i) => {
      let den = 1;
      for (let j = 0; j < z.length; j++) if (j !== i) den = mul(den, sub(zi, z[j]));
      return sub(zi, div(p(zi), den));
    });
    z = next;
  }
  return z;
}
```

계수가 실수인 다항식에 실수 초깃값을 주면 근삿값이 실수에 머물러 복소수 근에 닿지 않는다. 그래서 $1$ 의 거듭제곱근이 아닌 복소수 $w$ 의 거듭제곱 $w^0,w^1,\dots,w^{n-1}$ 처럼 실수축과 원점에 대해 대칭이 아닌 점들로 시작한다.

# 성질

## 고정점과 근

정리. $z_1,\dots,z_n$ 이 서로 다르고 모든 $W_i=0$ 이면 $\lbrace z_1,\dots,z_n\rbrace$ 은 $p$ 의 근 전체다.

증명의 요지. $W_i=0$ 은 $p(z_i)=0$ 이다. 서로 다른 근 $n$ 개를 가지므로 [다항식환](polynomial-rings.md)의 인수 정리로 $p(x)=\prod_i(x-z_i)$ 이다.

## 근의 합의 보존

정리. 한 걸음 뒤의 근삿값의 합은 $-a_{n-1}$, 곧 $p$ 의 근의 합과 같다. 여기서 $a_{n-1}$ 은 $p$ 의 $x^{n-1}$ 계수다.

증명의 요지. $p(x)-\prod_j(x-z_j)$ 는 차수가 $n-1$ 이하이고 $z_i$ 에서 값이 $p(z_i)$ 다. [다항식 보간](polynomial-interpolation.md)의 Lagrange 꼴로 쓰면 다음이 나온다.

$$
p(x)-\prod_j(x-z_j)=\sum_iW_i\prod_{j\ne i}(x-z_j)
$$

양변의 $x^{n-1}$ 계수를 비교하면 $a_{n-1}+\sum_jz_j=\sum_iW_i$ 이므로 $\sum_i(z_i-W_i)=-a_{n-1}$ 이다. 직관 절의 예에서 한 걸음 뒤 근삿값 $1.3608+2.0222i$, $-1.3982-0.6936i$, $3.0374-1.3287i$ 의 합은 $3$ 이다.

## Newton 법으로서의 해석

근삿값 $z=(z_1,\dots,z_n)$ 에 $\prod_j(x-z_j)$ 의 계수 $n$ 개를 대응시키는 사상을 $E$ 라 하면, $p$ 의 근 전체를 구하는 문제는 연립방정식 $E(z)=(a_{n-1},\dots,a_0)$ 이다. 이 연립방정식에 다변수 [Newton 법](newton-method.md)을 쓰면 한 걸음이 Durand–Kerner 걸음과 같다. 위 보간 등식이 $E$ 의 Jacobian 으로 선형계를 푼 결과다.

따라서 $p$ 의 근이 모두 단순근이고 초깃값이 근에 충분히 가까우면 Durand–Kerner 반복은 이차 수렴한다. 중근이 있으면 그 근으로 가는 근삿값들의 수렴이 선형으로 떨어진다.

## Aberth 법

[Aberth 법](aberth-method.md)은 보정을 다음으로 바꾼다.

$$
z_i\mapsto z_i-\frac{N_i}{1-N_i\sum_{j\ne i}\frac{1}{z_i-z_j}},\qquad N_i=\frac{p(z_i)}{p'(z_i)}
$$

$N_i$ 는 $z_i$ 의 Newton 걸음이고, 분모의 합이 다른 근삿값들에서 밀어내는 효과를 준다. 단순근에서 삼차 수렴한다.

# 활용

- 다항식 근 찾기 프로그램. 근을 모두 한꺼번에 구하고 인수를 나누지 않으므로 찾은 근의 오차가 다음 근으로 넘어가지 않는다. 임의 정밀도 근 찾기 프로그램 MPSolve 가 Aberth 법을 쓴다.
- 병렬 계산. 한 걸음 안에서 $W_i$ 끼리는 서로 기다리지 않으므로 근마다 다른 처리기에 맡긴다.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)
- [대수학의 기본정리](fundamental-theorem-of-algebra.md)

## 더 알아보기

- [Aberth 법](aberth-method.md)

#algorithms #algebra #complex_analysis
