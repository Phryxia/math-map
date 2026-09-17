# Radon–Nikodym 정리

# 개요

밀도함수는 확률측도를 Lebesgue 측도로 나눈 몫이라고 말하고 싶은 대상이다. 측도는 집합을 받는 함수라 나눗셈이 정의되어 있지 않다.

Radon–Nikodym 정리가 이 나눗셈을 정당화한다. $\mu$ 가 무시하는 집합을 $\nu$ 도 무시하면 $\nu$ 를 $\mu$ 로 적분해 복원하는 함수가 존재한다. 미적분학의 기본 정리가 누적량과 변화율을 잇듯 이 정리는 측도와 그 밀도를 잇는다.

확률밀도함수, [조건부 기댓값](conditional-expectation.md), [우도비](change-of-measure.md), 마팅게일의 밀도과정이 모두 Radon–Nikodym 도함수다.

# 직관

## 영집합의 보존

밀도가 있다는 것은 $\nu$ 가 $\mu$ 를 저울로 삼아 각 지점의 무게를 다시 매긴 결과라는 뜻이다. 아무리 큰 밀도를 곱해도 $0$ 은 $0$ 이므로 $\mu$ 가 무게 $0$ 으로 판정한 자리에서 $\nu$ 도 $0$ 이다.

이 필요조건은 충분조건이기도 하다. 영집합만 보존하면 밀도가 존재한다. 무한히 많은 집합에 대한 조건에서 함수 하나를 얻는 것이므로 증명이 짧지 않다.

## 밀도가 없는 예

$0$ 에 질량 $1$ 을 몰아 준 Dirac 측도는 길이측도에 대해 밀도를 갖지 않는다. $\lbrace 0\rbrace$ 의 길이가 $0$ 인데 측도가 $1$ 이기 때문이다. $0$ 에서만 무한대이고 적분하면 $1$ 인 함수는 없다. 물리학의 델타 함수는 함수가 아니라 초함수다.

Cantor 함수가 유도하는 측도는 어떤 점에도 질량을 몰아 주지 않으면서 길이 $0$ 인 Cantor 집합 위에 전부 실려 있어 밀도가 없다. 절대연속과 특이의 두 성분으로 임의의 측도가 분해된다는 것이 Lebesgue 분해 정리다.

# 정의

## 절대연속

같은 가측 공간 위의 측도 $\mu$ 와 $\nu$ 에 대해 $\mu(E) = 0$ 이면 항상 $\nu(E) = 0$ 일 때 $\nu$ 가 $\mu$ 에 대해 절대연속이라 하고

$$
\nu\ll\mu
$$

로 쓴다. $\nu$ 가 유한하면 이 조건은 임의의 $\varepsilon > 0$ 에 대해 $\mu(E) < \delta$ 이면 $\nu(E) < \varepsilon$ 인 $\delta > 0$ 이 존재한다는 조건과 동치다. 절대연속이라는 이름이 이 형태에서 왔다.

## 정리

$\mu$ 와 $\nu$ 가 $\sigma$ -유한이고 $\nu \ll \mu$ 이면 음이 아닌 가측함수 $f$ 가 존재해 모든 가측집합 $E$ 에서

$$
\nu(E)=\int_E f\thinspace d\mu
$$

가 성립한다. $f$ 는 $\mu$ 거의 모든 곳에서 유일하며 Radon–Nikodym 도함수라 하고

$$
f=\frac{d\nu}{d\mu}
$$

로 쓴다.

$\sigma$ -유한성은 뺄 수 없다. $\mathbb R$ 의 Borel 집합에 $\mu$ 를 셈측도로, $\nu$ 를 Lebesgue 측도로 두면 $\nu \ll \mu$ 이지만 셈측도가 $\sigma$ -유한이 아니어서 밀도가 존재하지 않는다.

# 성질

## 필요조건과 충분조건

$\mu(E) = 0$ 이면 $E$ 위의 적분이 $0$ 이므로 $\nu(E) = 0$ 이다. 정리의 내용은 $\sigma$ -유한성 아래에서 이 조건이 충분하다는 것이다.

표준 증명은 $\lbrace g \ge 0 : \int_E g \thinspace d\mu \le \nu(E) \text{ for all } E\rbrace$ 라는 함수족의 상한을 취하고, [단조수렴 정리](monotone-convergence.md)로 그 상한이 밀도임을 보인다. Hilbert 공간의 사영을 쓰는 von Neumann 의 증명은 조건부 기댓값이 사영이라는 관점으로 이어진다.

## 도함수의 연산 규칙

Radon–Nikodym 도함수는 다음 규칙을 만족한다.

$$
\frac{d(\nu_1+\nu_2)}{d\mu}=\frac{d\nu_1}{d\mu}+\frac{d\nu_2}{d\mu},\qquad
\frac{d\nu}{d\lambda}=\frac{d\nu}{d\mu}\cdot\frac{d\mu}{d\lambda}
$$

두 번째가 연쇄법칙이고 $\nu \ll \mu \ll \lambda$ 일 때 거의 모든 곳에서 성립한다. $\nu \ll \mu$ 이고 $\mu \ll \nu$ 이면 두 측도가 동치이고

$$
\frac{d\mu}{d\nu}=\left(\frac{d\nu}{d\mu}\right)^{-1}
$$

이다. 적분 공식도 도함수처럼 작동한다. 음이 아닌 가측함수 $g$ 에 대해

$$
\int g\thinspace d\nu=\int g\thinspace\frac{d\nu}{d\mu}\thinspace d\mu
$$

이고, 이 식으로 측도를 바꾸어 적분을 계산한다.

## Lebesgue 분해

$\sigma$ -유한 측도 $\nu$ 는 유일하게

$$
\nu=\nu_{ac}+\nu_s,\qquad \nu_{ac}\ll\mu,\quad \nu_s\perp\mu
$$

로 분해된다. $\nu_s \perp \mu$ 는 두 측도가 서로소인 집합 위에 실려 있다는 뜻이다. 실수 위의 확률분포를 연속, 이산, 특이연속 부분으로 나누는 분류가 이 정리의 특수한 경우다.

```python
def rn_derivative_finite(nu, mu):
    """유한 집합 위에서 밀도를 직접 계산한다. mu(x)=0 인 곳은 정의되지 않는다."""
    out = {}
    for x in set(nu) | set(mu):
        m = mu.get(x, 0)
        n = nu.get(x, 0)
        if m == 0:
            if n != 0:
                raise ValueError(f"절대연속 아님: mu({x})=0 인데 nu({x})={n}")
            continue                      # mu-영집합: 밀도 값이 임의
        out[x] = n / m
    return out


mu = {"a": 0.5, "b": 0.3, "c": 0.2}
nu = {"a": 0.2, "b": 0.6, "c": 0.2}
f = rn_derivative_finite(nu, mu)
print(f)                                   # 우도비
print(sum(mu[x] * f[x] for x in mu))       # 1.0: ∫ f dmu = nu(전체)

g = {"a": 1.0, "b": 4.0, "c": 9.0}
print(sum(nu[x] * g[x] for x in nu),
      sum(mu[x] * f[x] * g[x] for x in mu))  # 두 방식의 적분이 일치

try:
    rn_derivative_finite({"a": 1.0}, {"b": 1.0})
except ValueError as e:
    print(e)
```

밀도를 곱해 $\mu$ 로 적분한 결과가 $\nu$ 로 적분한 것과 같다. 이 등식이 중요도 표본추출과 우도비 검정의 계산 근거다.

## 조건부 기댓값과의 관계

부분 $\sigma$ -대수 $\mathcal G \subseteq \mathcal F$ 에 대해 $E[X \mid \mathcal G]$ 는 $\mathcal G$ 위의 측도 $A \mapsto \int_A X \thinspace dP$ 의 $P\rvert_{\mathcal G}$ 에 대한 Radon–Nikodym 도함수다. 조건부 기댓값의 존재와 거의 확실한 유일성이 이 정리에서 나온다.

이 정의에서 조건부 기댓값은 특정 값을 관측한 뒤의 평균이 아니라 주어진 정보로 가측이면서 적분이 일치하는 함수다. 조건이 확률 $0$ 인 사건이어도 정의가 성립한다.

# 활용

## 확률밀도의 정의

확률분포가 Lebesgue 측도에 대해 절대연속이면 밀도함수가 존재하고 셈측도에 대해 절대연속이면 확률질량함수가 존재한다. 하나의 정리가 이산분포와 연속분포를 함께 다룬다.

모형을 밀도로 적는 것은 기준측도를 고정하는 일이다. 기준측도를 바꾸면 밀도의 형태가 달라지고 [지수족](exponential-families.md)의 표현도 기준측도에 의존한다.

## 측도변환

확률측도 $Q$ 가 $P$ 에 대해 절대연속이면 $dQ/dP$ 가 우도비이고

$$
\mathbb{E}_Q[X]=\mathbb{E}_P\negthinspace\left[X\frac{dQ}{dP}\right]
$$

가 성립한다. 중요도 표본추출, 우도비 검정, 위험중립 가격결정, 확률미분방정식의 Girsanov 정리가 이 항등식을 쓴다. 두 측도가 절대연속이 아니면 변환이 정의되지 않는다.

## 미분과의 관계

$\mathbb R^n$ 에서 $\nu \ll \lambda$ 일 때 도함수는 작은 공에서의 비율의 극한

$$
\frac{d\nu}{d\lambda}(x)=\lim_{r\to0}\frac{\nu(B(x,r))}{\lambda(B(x,r))}
$$

으로 거의 모든 점에서 복원된다. 이것이 Lebesgue 미분 정리이고, Radon–Nikodym 도함수가 국소적인 밀도임을 말한다. [미적분학의 기본 정리](fundamental-calculus.md)의 가장 일반적인 형태다.[^1]

[^1]: Terence Tao, *245B Notes 1: Signed measures and the Radon–Nikodym–Lebesgue theorem*. 절대연속, Radon–Nikodym 도함수와 Lebesgue 분해. https://terrytao.wordpress.com/2009/01/04/245b-notes-1-signed-measures-and-the-radon-nikodym-lebesgue-theorem/

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Lebesgue 적분](lebesgue-integral.md)
- [측도론 개관](measure-theory-overview.md)

## 더 알아보기

- [측도변환과 우도비](change-of-measure.md)
- [조건부 기댓값](conditional-expectation.md)

#measure_theory #probability #statistics #theorem
