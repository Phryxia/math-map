# Artin 원시근 추측

# 개요

**Artin 원시근 추측(Artin's conjecture on primitive roots)** 은 정수 $a$ 가 $-1$ 도 제곱수도 아니면 법 $p$ 에서 $a$ 가 [원시근](primitive-roots.md)이 되는 소수 $p$ 가 무한히 많다는 추측이다. $3$ 부터 $29$ 까지의 홀수 소수 아홉 개 가운데 $2$ 가 원시근인 것은 $3,5,11,13,19,29$ 여섯이고, $7,17,23$ 에서는 아니다. 소수 $p$ 마다 $a$ 가 원시근이 되지 못하게 막는 조건을 소수 $q$ 별로 나누고, 그 조건이 걸리는 소수의 비율을 [Chebotarev 밀도 정리](chebotarev.md)로 계산해 곱하면 추측이 예측하는 비율이 나온다.

# 직관

법 $7$ 에서 $2$ 가 원시근이 아닌 것은 $2\equiv 3^2$ 이 제곱수이기 때문이다. 원시근 $g$ 로 $2\equiv g^k$ 라 쓰면 $2$ 의 위수는 $6/\gcd(k,6)$ 이므로, $2$ 가 원시근이 아닌 것은 $6$ 의 어떤 소인수 $q$ 가 $k$ 를 나눌 때, 곧 $2$ 가 법 $7$ 에서 $q$ 제곱수일 때다. 법 $17$ 에서는 $2\equiv 6^2$ 이고, 법 $23$ 에서는 $2\equiv 5^2$ 이다.

그러므로 $2$ 가 법 $p$ 의 원시근이 되려면 모든 소수 $q$ 에 대해 "$q\mid p-1$ 이고 $2$ 가 법 $p$ 의 $q$ 제곱수" 가 일어나지 않아야 한다. $q=2$ 이면 이 일이 일어나는 소수는 $p\equiv\pm 1\pmod 8$ 인 소수이고 전체 소수의 절반이다. 일반적인 $q$ 에서 이 비율이 $1/(q(q-1))$ 이고, 서로 다른 $q$ 의 조건이 독립이라 보고 곱하면 $2$ 가 원시근인 소수의 비율은 다음 수다.

$$
A=\prod_{q\text{ 소수}}\left(1-\frac{1}{q(q-1)}\right)\approx 0.3739558
$$

$q=2$ 의 인수만 $1/2$ 이고, 나머지 인수들의 곱이 약 $0.748$ 이다.

# 정의

$a$ 를 $-1$ 이 아니고 완전제곱수가 아닌 정수라 하자. $N_a(x)$ 를 $x$ 이하의 소수 $p\nmid a$ 가운데 $a$ 가 법 $p$ 의 원시근인 것의 개수라 한다. **Artin 원시근 추측** 은 다음 두 진술이다.

1. $N_a(x)\to\infty$ 이다.
2. 상수 $c_a\gt 0$ 이 있어 $N_a(x)\sim c_a\pi(x)$ 이다. $a$ 가 어떤 수의 거듭제곱이 아니고 $a$ 의 제곱 인수 없는 부분이 법 $4$ 로 $1$ 이 아니면 $c_a=A$ 다.

$A$ 를 **Artin 상수(Artin's constant)** 라 한다. 추측은 E. Artin 이 1927 년에 H. Hasse 와의 대화에서 제기했다.[^1]

$a$ 의 제곱 인수 없는 부분이 법 $4$ 로 $1$ 이면 $c_a$ 는 $A$ 에 유리수 보정 인수를 곱한 값이다. D. H. Lehmer 와 E. Lehmer 가 1957 년에 계산한 개수가 $A$ 와 어긋난 것에서 보정이 드러났다.[^1]

# 성질

## 조건의 확률

소수 $q$ 에 대해 "$q\mid p-1$ 이고 $a$ 가 법 $p$ 의 $q$ 제곱수" 인 것은 $p$ 가 체 $K_q=\mathbb Q(\zeta_q,a^{1/q})$ 에서 완전 분해하는 것과 동치다. $\zeta_q$ 는 $1$ 의 원시 $q$ 제곱근이다. $[K_q:\mathbb Q]=q(q-1)$ 이면 Chebotarev 밀도 정리에 따라 그런 $p$ 의 밀도는 $1/(q(q-1))$ 이다. 유한 개의 $q$ 에 대해서는 포함배제와 Chebotarev 밀도 정리로 정확한 밀도가 나온다. 무한히 많은 $q$ 를 한꺼번에 다루려면 $q$ 가 $p$ 에 비해 클 때의 오차를 고르게 잡아야 하고, 여기서 무조건적 방법이 막힌다.

## Hooley 정리

Hooley 정리(Hooley's theorem). 체 $\mathbb Q(\zeta_k,a^{1/k})$ 들의 [Dedekind zeta 함수](dedekind-zeta.md)에 대해 [Riemann 가설](riemann-hypothesis.md)의 일반화가 성립하면, Artin 원시근 추측의 두 진술이 보정된 상수와 함께 성립한다.[^2]

증명의 요지. $q$ 를 크기에 따라 셋으로 나눈다. 작은 $q$ 는 Chebotarev 밀도 정리의 오차항을 일반화된 Riemann 가설로 잡아 포함배제로 처리한다. 중간 크기의 $q$ 는 Brun–Titchmarsh 부등식(Brun–Titchmarsh inequality)으로 등차수열 속 소수의 개수를 위에서 눌러 처리한다. 큰 $q$ 는 $a$ 의 위수가 작아야 한다는 조건으로 바꿔 작은 $m$ 에 대한 $a^m-1$ 의 소인수 개수로 센다.

## Heath-Brown 정리

Heath-Brown 정리(Heath-Brown's theorem). $2,3,5$ 가운데 적어도 하나는 무한히 많은 소수 $p$ 에서 법 $p$ 의 원시근이다. 더 일반적으로, 곱셈적으로 독립인 세 소수 $a,b,c$ 가운데 적어도 하나가 그렇다.[^3]

증명은 Gupta 와 Murty 의 방법을 정밀하게 한 것이다. $p-1$ 의 홀수 소인수가 많아야 둘이고 모두 큰 소수 $p$ 를 체 방법으로 무한히 많이 만든다. 이런 $p$ 에서 원시근이 아닌 수는 법 $p$ 의 제곱수이거나 위수가 작아야 하고, 세 수가 모두 그렇게 되는 경우가 무한히 많을 수 없음을 보인다. 이 결과는 셋 가운데 어느 수인지 정하지 않으며, 원시근인 소수가 무한히 많다고 무조건적으로 증명된 특정 정수 $a$ 는 알려져 있지 않다.[^4]

# 활용

- 소수 $p$ 에서 $10$ 이 원시근인 것과 $1/p$ 의 십진 전개의 순환마디 길이가 $p-1$ 인 것은 동치다. $1/7=0.\overline{142857}$ 이 그 예다. Artin 원시근 추측의 $a=10$ 경우는 이런 소수가 무한히 많다는 진술이고, Gauss 가 *Disquisitiones Arithmeticae* 에서 물은 것이다.
- [유한체](finite-fields.md) $\mathbb F_p$ 에서 고정된 작은 수 $a$ 가 곱셈군의 생성원이면 [이산로그](discrete-logarithm.md) 기반 암호의 기준 원소로 쓰기 편하다. 추측은 그런 $p$ 가 충분히 많다는 것을 예측한다.
- 같은 꼴의 질문이 타원곡선으로 옮겨져, 유리수 위 타원곡선의 법 $p$ 환원이 순환군인 소수의 밀도를 묻는 Serre 의 순환성 추측(cyclicity conjecture)이 된다.

[^1]: P. Moree, "Artin's primitive root conjecture – a survey", *Integers* **12A** (2012), Article A13. 추측의 기원, Lehmer 부부의 계산과 Heilbronn 의 보정, 보정 상수의 식.
[^2]: C. Hooley, "On Artin's conjecture", *Journal für die reine und angewandte Mathematik* **225** (1967), 209–220.
[^3]: D. R. Heath-Brown, "Artin's conjecture for primitive roots", *Quarterly Journal of Mathematics* (2) **37** (1986), 27–38.
[^4]: 위 Moree 의 개관. Heath-Brown 의 결과가 예외를 많아야 둘로 줄이지만 특정한 $a$ 에 대해서는 무조건적 증명이 없음을 명시한다.

# 연관 문서

## 선수지식

- [원시근](primitive-roots.md)
- [Chebotarev 밀도 정리](chebotarev.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #group_theory
