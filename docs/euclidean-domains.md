# 유클리드 정역

# 개요

**유클리드 정역(Euclidean domain)** 은 원소마다 음이 아닌 정수 크기를 붙여, 나머지가 제수보다 작아지는 나눗셈을 언제나 할 수 있는 정역이다. 정수환과 [체](fields.md) 위의 [다항식환](polynomial-rings.md)이 이 조건을 만족하고, 두 환에서 최대공약수와 유일분해를 얻는 근거가 모두 이 나눗셈이다.

나눗셈이 있으면 [유클리드 알고리즘](euclidean-algorithm.md)이 유한 번에 멈추고, 최대공약수가 두 원소의 결합으로 쓰이며, 모든 아이디얼이 한 원소로 생성된다. 그래서 유클리드 정역은 주아이디얼정역(principal ideal domain, PID)이고 [유일분해정역](unique-factorization-domains.md)이다. 두 포함은 진부분이므로 역은 성립하지 않는다.

# 직관

정수에서 유일분해를 얻는 근거는 나눗셈이다. $12$ 를 $5$ 로 나누면 몫 $2$ 와 나머지 $2$ 가 나오고, 나머지가 제수보다 작으므로 같은 과정을 되풀이하면 언젠가 나머지가 $0$ 이 된다. 이 반복이 최대공약수를 주고, 거기서 더 쪼갤 수 없는 수가 곱을 나누면 인수 하나를 나눈다는 성질이 따라온다. 다른 환에서도 나눗셈이 되면 같은 결론이 나온다.

[Gauss 정수환](gaussian-integers.md) $\mathbb Z[i]$ 에서 해 본다. $3+4i$ 를 $1+2i$ 로 나누려면 분모를 유리화한다.

$$
\frac{3+4i}{1+2i}=\frac{(3+4i)(1-2i)}{5}=\frac{11-2i}{5}=2.2-0.4i
$$

이 값은 Gauss 정수가 아니다. 복소평면에서 이 점에 가장 가까운 격자점은 $2$ 이므로, 몫을 $2$ 로 잡으면 나머지는 $3+4i-2(1+2i)=1$ 이다.

나머지가 제수보다 작은지 재려면 크기를 정해야 한다. $a+bi$ 에 $a^2+b^2$ 을 붙이면 나머지의 크기는 $1$ 이고 제수의 크기는 $5$ 다.

이 방법은 두 Gauss 정수의 어느 쌍에도 통한다. 몫을 복소수로 계산하면 복소평면의 한 점이 나오고, 그 점에서 가장 가까운 격자점까지의 거리는 $\sqrt 2/2$ 를 넘지 않는다. 몫을 그 격자점으로 잡으면 나머지의 크기가 제수의 크기의 절반 이하가 된다. 크기를 이렇게 붙일 수 있는 정역이 유클리드 정역이다.

# 정의

$R$ 를 정역이라 하자. $R$ 가 유클리드 정역이라는 것은 다음을 만족하는 함수 $N\colon R\setminus\lbrace 0\rbrace\to\mathbb Z\_{\ge 0}$ 가 존재한다는 뜻이다.

$$
a\in R,\ b\in R\setminus\lbrace 0\rbrace \implies a=qb+r \ \text{인} \ q,r\in R \ \text{가 있고} \ r=0 \ \text{또는} \ N(r)\lt N(b)
$$

이 $N$ 을 **유클리드 함수(Euclidean function)** 라 한다. $q$ 와 $r$ 의 유일성은 요구하지 않는다.

조건에 곱셈과의 관계가 없는 점이 노름과 다르다. $N(ab)\ge N(a)$ 나 $N(ab)=N(a)N(b)$ 를 덧붙인 정의도 쓰이지만, 두 조건 없이도 아래 성질이 모두 나온다.

# 성질

## 주아이디얼정역

$I$ 를 $0$ 이 아닌 [아이디얼](ideals-quotient-rings.md)이라 하고 $N$ 값이 최소인 $b\in I\setminus\lbrace 0\rbrace$ 를 잡는다. 임의의 $a\in I$ 를 $a=qb+r$ 로 쓰면 $r=a-qb\in I$ 이므로 $N(r)\lt N(b)$ 는 최소성에 어긋나고, 따라서 $r=0$ 이며 $I=(b)$ 다. 유일분해정역임은 여기서 따라온다.

## Bézout 항등식

$a,b$ 가 둘 다 $0$ 이 아니면 아이디얼 $(a,b)$ 는 한 원소 $d$ 로 생성되고, 이 $d$ 가 최대공약수다.

$$
d=ax+by \ \text{인} \ x,y\in R \ \text{가 존재한다}
$$

$d\in(a,b)$ 가 그 꼴을 주고, $a,b\in(d)$ 가 $d$ 를 공약수로 만든다. 공약수 $e$ 는 $ax+by$ 를 나누므로 $d$ 를 나눈다.

## 확장 유클리드 알고리즘

Bézout 계수는 나눗셈을 되풀이하며 계수를 함께 갱신하면 나온다. $N(r)$ 이 매 단계 줄어드는 음이 아닌 정수이므로 반복은 유한 번에 멈춘다.

```javascript
// R 은 유클리드 정역. R.divmod(a, b) 는 a = q*b + r 를 주는 나눗셈이다.
function extendedEuclid(R, a, b) {
  let [r0, r1] = [a, b];
  let [x0, x1] = [R.one, R.zero];
  let [y0, y1] = [R.zero, R.one];
  while (!R.isZero(r1)) {
    const { q, r } = R.divmod(r0, r1);
    [r0, r1] = [r1, r];
    [x0, x1] = [x1, R.sub(x0, R.mul(q, x1))];
    [y0, y1] = [y1, R.sub(y0, R.mul(q, y1))];
  }
  return { gcd: r0, x: x0, y: y0 };
}
```

정수에서 $N$ 을 절댓값으로, [체](fields.md) 위의 다항식에서 차수로 잡으면 각각 정수의 최대공약수와 다항식의 최대공약수가 된다.

## 노름 유클리드 이차 정수환

제곱인수가 없는 $d$ 에 대해 $K=\mathbb Q(\sqrt d)$ 의 정수환에 절대노름 $\vert N(\alpha)\vert$ 을 붙인 것이 유클리드 함수가 되는 $d$ 는 유한하다[^1]. $d$ 가 음이면 다섯 개다.

$$
d\lt 0:\quad -1,\ -2,\ -3,\ -7,\ -11
$$

$d$ 가 양이면 열여섯 개다.

$$
d\gt 0:\quad 2,\ 3,\ 5,\ 6,\ 7,\ 11,\ 13,\ 17,\ 19,\ 21,\ 29,\ 33,\ 37,\ 41,\ 57,\ 73
$$

$d=-1$ 이 Gauss 정수환이고, $d=-3$ 은 $\omega=(1+\sqrt{-3})/2$ 로 생성되는 Eisenstein 정수환이다. 이 목록 밖의 [대수적 수체](algebraic-number-fields.md)에서는 원소의 분해가 유일하지 않을 수 있고, 분해의 대상을 아이디얼로 바꾸어 유일성을 복구한 것이 [Dedekind 정역](dedekind-domains.md)이다.

## 유클리드 정역이 아닌 주아이디얼정역

$\mathbb Z\bigl[\tfrac{1+\sqrt{-19}}{2}\bigr]$ 는 주아이디얼정역이지만 어떤 유클리드 함수도 갖지 않는다[^2]. 노름으로 나눗셈이 되지 않는다는 것보다 강한 주장이며, 증명은 유클리드 정역이면 $N$ 값이 최소인 비단위가 몫환을 체로 만든다는 점과 이 환의 몫환을 대조한다.

## 유클리드 함수의 선택

한 환에 유클리드 함수가 여럿 있을 수 있다. 정수환에서 절댓값과 $\lceil\log_2(\vert a\vert+1)\rceil$ 이 모두 유클리드 함수다. 유클리드 정역에서는 값이 점마다 최소인 유클리드 함수가 하나 존재하고, 그 값은 단위원에서 $0$ 이며 나눗셈을 반복해 $0$ 에 이르는 최소 단계 수와 같다[^3].

# 활용

## 모듈러 역원

$f$ 와 서로소인 $g$ 에 대해 $gu+fv=1$ 을 확장 유클리드 알고리즘으로 구하면 $u$ 가 몫환에서 $g$ 의 역원이다. [유한체](finite-fields.md) $\mathbb F\_p[x]/(h)$ 의 곱셈 역원과 [정수의 합동](modular-arithmetic.md)에서 $\bmod n$ 역원이 같은 절차로 계산된다.

## 가군의 구조 정리

유클리드 정역 위의 행렬은 행과 열에 나눗셈을 적용하는 연산으로 대각행렬로 바뀌고, 대각성분이 차례로 다음을 나누게 정돈된다. 이 표준형이 [PID 위의 유한생성 가군](finitely-generated-modules.md)의 분해를 계산으로 주며, 정수환에서는 유한생성 아벨군의 분류, [체](fields.md) 위의 다항식환에서는 [Jordan 표준형](jordan-canonical-form.md)이 된다.

## Gauss 정수환의 산술

$\mathbb Z[i]$ 가 유클리드 정역이므로 소원 분해가 유일하고, 홀수 [소수](primes.md) $p$ 가 $\mathbb Z[i]$ 에서 두 소원의 곱으로 쪼개지는지가 $p$ 를 $4$ 로 나눈 나머지로 갈린다. $p\equiv 1 \pmod 4$ 인 소수가 두 제곱수의 합으로 쓰이는 것이 이 분해의 결과다.

[^1]: F. Lemmermeyer, "The Euclidean algorithm in algebraic number fields", Expositiones Mathematicae 13 (1995), 385–416. 노름 유클리드 수체의 알려진 목록과 이차체에서의 분류.
[^2]: P. M. Cohn, "On the structure of the $\mathrm{GL}\_2$ of a ring", Publications mathématiques de l'IHÉS 30 (1966), 5–53. $\mathbb Z\bigl[\tfrac{1+\sqrt{-19}}{2}\bigr]$ 가 유클리드 정역이 아닌 주아이디얼정역이라는 확인. http://www.numdam.org/item/PMIHES_1966__30__5_0/
[^3]: Th. Motzkin, "The Euclidean algorithm", Bulletin of the American Mathematical Society 55 (1949), 1142–1146. 점마다 최소인 유클리드 함수의 구성.

# 연관 문서

## 선수지식

- [유일분해정역](unique-factorization-domains.md)

## 더 알아보기

- [Gauss 정수환](gaussian-integers.md)

#ring_theory #algebra #number_theory #algorithms
