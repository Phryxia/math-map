# Eichler–Shimura 관계

# 개요

**Eichler–Shimura 관계(Eichler–Shimura relation)** 는 모듈러 곡선의 Jacobi 다양체 위에서 Hecke 작용소 $T_p$ 가 Frobenius 사상과 그 쌍대의 합으로 적힌다는 등식이다. 곡선 $y^2+y=x^3-x^2$ 의 해를 법 $p$ 로 세어 $p$ 에서 뺀 수와, 무한곱 $q\prod_{n\ge 1}(1-q^n)^2(1-q^{11n})^2$ 을 전개한 급수의 $q^p$ 계수는 서로 다른 곳에서 나온 수인데, $11$ 이 아닌 소수마다 같은 값이다. 두 수를 같은 곡선 위의 자기준동형으로 적고 그 사이의 등식을 세우면 이 일치가 증명된다.

# 직관

무게 $2$ 고유형식의 Fourier 계수 $a_p$ 는 상반평면 위 정칙함수에서 읽는 수이고, [타원곡선](elliptic-curves.md)의 $\mathbb F_p$ 점 개수는 유한체 위 방정식의 해를 세는 수다. 두 수가 같다는 것을 보이려면 둘을 한 대상의 자기준동형으로 적어 같은 환에서 비교해야 한다.

그 대상이 [모듈러 곡선](modular-curves.md)의 [Jacobi 다양체](jacobian-variety.md)다. [Hecke 작용소](hecke-operators.md)는 곡선 위의 대응에서 오므로 Jacobi 다양체의 자기준동형을 주고, 점 개수는 $\mathbb F_p$ 로 환원한 Jacobi 다양체의 Frobenius 사상이 주는 자기준동형에서 나온다. 두 자기준동형이 한 환에 놓이면 등식을 쓸 수 있다.

쓴 등식에서 $T_p$ 는 Frobenius 하나와 같지 않다. $p$ 차 Hecke 대응은 격자의 지표 $p$ 부분격자 $p+1$ 개를 보고, 환원하면 그 $p+1$ 개가 두 묶음으로 갈린다. 한 묶음이 Frobenius 로 가는 것이고 다른 묶음이 그 쌍대로 가는 것이다. 그래서 등식의 오른쪽에 항이 둘 있다.

이 등식으로부터 무게 $2$ 고유형식의 Hecke 고유값이 [Galois 표현](galois-representations.md)의 Frobenius 특성다항식의 계수와 같다는 것이 유도된다.

# 정의

$p\nmid N$ 이라 하자. 모듈러 곡선 $X_0(N)$ 은 $\mathbb Z\lbrack 1/N\rbrack$ 위의 매끄러운 사영 모형을 갖는다. 그 모형을 $\mathbb F_p$ 로 환원한 곡선을 $\overline X$ 라 하고 그 Jacobi 다양체를 $\overline J$ 라 한다.

$F\colon\overline J\to\overline J$ 를 $p$ 차 Frobenius 사상이라 하고 $V$ 를 그 쌍대라 한다. $V$ 를 **Verschiebung** 이라 하며 $FV=VF=p$ 를 만족한다.

**Eichler–Shimura 관계**는 자기준동형환 $\mathrm{End}(\overline J)$ 에서의 등식이다.

$$T_p=F+V$$

$T_p$ 는 $X_0(N)$ 위의 Hecke 대응을 환원해 얻은 자기준동형이다. $\Gamma_1(N)$ 레벨에서는 오른쪽 둘째 항에 디아몬드 작용소가 붙어 $T_p=F+\langle p\rangle V$ 가 된다.

# 성질

## Frobenius 의 특성다항식

$\ell\ne p$ 라 하자. $\overline J$ 의 $\ell$ 진 Tate 가군 위에서 $F$ 는 다음 다항식을 만족한다.

$$X^2-T_pX+p=0$$

증명의 요지. $T_p=F+V$ 와 $FV=p$ 에서 $V=T_p-F$ 를 둘째 식에 넣으면 $F(T_p-F)=p$ 이고 정리하여 위 식을 얻는다. $T_p$ 의 고유값이 $a_p$ 인 고유벡터로 제한하면 $F$ 의 특성다항식이 $X^2-a_pX+p$ 다.

## Hasse 부등식

$F$ 의 두 고유값은 곱이 $p$ 이고 절댓값이 $\sqrt p$ 이므로 $\lvert a_p\rvert\le 2\sqrt p$ 다. 무게 $2$ 에서 이것이 Ramanujan–Petersson 추정이고, 타원곡선에서는 $\mathbb F_p$ 점 개수에 대한 Hasse 부등식이다.

## 코호몰로지 동형

무게 $k\ge 2$ 에서 같은 이름의 동형이 하나 더 있다. $\Gamma\subset \mathrm{SL}\_2(\mathbb Z)$ 를 합동 부분군, $V_{k-2}$ 를 차수 $k-2$ 동차다항식의 공간이라 하면 다음이 Hecke 작용과 가환인 동형이다.[^1]

$$S_k(\Gamma)\oplus\overline{S_k(\Gamma)}\oplus\mathcal E_k(\Gamma)\cong H^1(\Gamma,V_{k-2})$$

$S_k$ 는 첨점형식, $\mathcal E_k$ 는 Eisenstein 부분이다. $k=2$ 에서 오른쪽이 $\overline X$ 가 아닌 복소 모듈러 곡선의 첫 코호몰로지이고, 왼쪽의 차원 계산이 종수 공식을 준다.

# 활용

- **모듈러성.** 타원곡선 $E$ 가 $J_0(N)$ 의 몫으로 나오면 $E$ 의 $\ell$ 진 표현이 고유형식의 표현과 같고, 각 $p$ 에서 $\char35{}E(\mathbb F_p)=p+1-a_p$ 가 성립한다. 모든 $\mathbb Q$ 위 타원곡선이 그런 몫이라는 것이 모듈러성 정리다.
- **Galois 표현의 구성.** 무게 $2$ 고유형식에서 Galois 표현을 만들 때 이 관계를 쓴다. 무게가 큰 경우는 Jacobi 다양체 대신 모듈러 곡선 위 층의 코호몰로지를 쓴다.
- **Hecke 고유값의 합동.** 두 고유형식의 $a_p$ 가 법 $\ell$ 로 모두 같으면 두 Galois 표현의 환원이 같다. 이 판정이 [Serre 추측](serre-conjecture.md)과 레벨 내리기 논법에서 쓰인다.

[^1]: G. Shimura, *Introduction to the Arithmetic Theory of Automorphic Functions*, Princeton University Press (1971), Ch. 8. 합동 관계는 M. Eichler, "Quaternäre quadratische Formen und die Riemannsche Vermutung für die Kongruenzzetafunktion", Archiv der Mathematik **5** (1954), 355–366.

# 연관 문서

## 선수지식

- [Hecke 작용소](hecke-operators.md)
- [모듈러 곡선](modular-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebraic_topology #complex_analysis
