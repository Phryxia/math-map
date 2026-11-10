# Eichler–Shimura 관계

# 개요

**Eichler–Shimura 관계(Eichler–Shimura relation)** 는 모듈러 곡선의 Jacobi 다양체 위에서 Hecke 작용소 $T_p$ 가 Frobenius 사상과 그 쌍대의 합으로 적힌다는 등식이다. 곡선 $y^2+y=x^3-x^2$ 의 해를 법 $p$ 로 세어 $p$ 에서 뺀 수와, 무한곱 $q\prod_{n\ge 1}(1-q^n)^2(1-q^{11n})^2$ 을 전개한 급수의 $q^p$ 계수는 서로 다른 곳에서 나온 수인데, $11$ 이 아닌 소수마다 같은 값이다. 두 수를 같은 곡선 위의 자기준동형으로 적고 그 사이의 등식을 세우면 이 일치가 증명된다.

# 직관

개요의 두 수를 $p=2,3$ 에서 계산한다. $\mathbb F_2$ 에서 $y^2+y$ 와 $x^3-x^2$ 은 모든 $x,y$ 에서 $0$ 이므로 해가 $4$ 개이고, $2-4=-2$ 다. $\mathbb F_3$ 에서 $y^2+y=0$ 의 해는 $y=0,2$, $x^3-x^2=0$ 의 해는 $x=0,1$ 이고 $x=2$ 에서 $x^3-x^2=1$ 인데 $y^2+y=1$ 의 해가 없으므로 해가 $4$ 개이고, $3-4=-1$ 이다. 무한곱을 전개하면 $q-2q^2-q^3+2q^4+q^5+\cdots$ 이므로 $q^2$, $q^3$ 의 계수도 $-2$, $-1$ 이다.

해의 개수는 [유한체](finite-fields.md) 위의 방정식에서, 급수의 계수는 상반평면 위의 정칙함수인 [모듈러 형식](modular-forms.md)에서 나온다. 둘을 비교하려면 두 수를 한 대상 위의 사상으로 적어야 한다. 그 대상이 [모듈러 곡선](modular-curves.md) $X_0(11)$ 의 [Jacobi 다양체](jacobian-variety.md)이고, $X_0(11)$ 은 종수가 $1$ 이라 그 Jacobi 다양체는 [타원곡선](elliptic-curves.md) 하나다.

[Hecke 작용소](hecke-operators.md) $T_p$ 는 이 곡선 위의 사상으로 작용하고, 무한곱의 $q^p$ 계수 $a_p$ 를 곱하는 사상이다. 한편 법 $p$ 로 환원한 곡선에서는 좌표를 $p$ 제곱하는 Frobenius 사상 $F$ 가 해의 개수를 정한다.

$T_p$ 는 격자의 지표 $p$ 부분격자 $p+1$ 개를 모으는 대응에서 오고, 법 $p$ 로 환원하면 그 $p+1$ 개가 한 개와 $p$ 개의 두 묶음으로 갈린다. 한 묶음은 Frobenius $F$ 로 가고 다른 묶음은 $FV=p$ 인 쌍대 $V$ 로 간다. 그래서 $T_p=F+V$ 이고, $F$ 는 $F^2-a_pF+p=0$ 을 만족한다. 해의 개수는 $1-F$ 의 차수 $(1-F)(1-V)=1-a_p+p$ 이므로, 무한원점을 뺀 해의 개수가 $p-a_p$ 다.

# 정의

## Verschiebung

$p\nmid N$ 이라 하자. 모듈러 곡선 $X_0(N)$ 은 $\mathbb Z\lbrack 1/N\rbrack$ 위의 매끄러운 사영 모형을 갖는다. 그 모형을 $\mathbb F_p$ 로 환원한 곡선을 $\overline X$ 라 하고 그 Jacobi 다양체를 $\overline J$ 라 한다. $F\colon\overline J\to\overline J$ 를 $p$ 차 Frobenius 사상이라 할 때, $FV=VF=p$ 인 사상 $V$ 를 **Verschiebung** 이라 한다. 직관 절의 $N=11$ 에서 $\overline J$ 는 환원한 타원곡선이고 $F(x,y)=(x^p,y^p)$ 이며 $V$ 는 $F$ 의 쌍대 동종사상이다.

## Eichler–Shimura 관계

자기준동형환 $\mathrm{End}(\overline J)$ 에서의 등식

$$T_p=F+V$$

을 Eichler–Shimura 관계라 한다. $T_p$ 는 $X_0(N)$ 위의 Hecke 대응을 환원해 얻은 자기준동형이다. 직관 절의 $p=2$ 에서는 $T_2=-2$ 이므로 $F+V=-2$ 다.

$\Gamma_1(N)$ 수준에서는 $\gcd(d,N)=1$ 인 $d$ 에 대해 $d\bmod N$ 으로 정해지는 다이아몬드 작용소(diamond operator) $\langle d\rangle$ 가 있고, 관계는 $T_p=F+\langle p\rangle V$ 가 된다.

# 성질

## Frobenius 의 특성다항식

$\ell\ne p$ 라 하자. $\overline J$ 의 $\ell$ 진 Tate 가군(Tate module) 위에서 $F$ 는 다음 다항식을 만족한다.

$$X^2-T_pX+p=0$$

증명의 요지. $T_p=F+V$ 와 $FV=p$ 에서 $V=T_p-F$ 를 둘째 식에 넣으면 $F(T_p-F)=p$ 이고 정리하여 위 식을 얻는다. $T_p$ 의 [고윳값](eigenvalues.md)이 $a_p$ 인 고유벡터로 제한하면 $F$ 의 특성다항식이 $X^2-a_pX+p$ 다.

## 점의 개수

$\overline J$ 가 타원곡선 $\tilde E$ 이면 $\char35{}\tilde E(\mathbb F_p)=\deg(1-F)=p+1-a_p$ 다. 직관 절에서 $p=3$ 이면 $3+1-(-1)=5$ 이고, 해 $4$ 개에 무한원점을 더한 수와 같다.

## Hasse 부등식

$F$ 의 두 고윳값은 곱이 $p$ 이고, 곡선에 대한 Weil 의 정리([Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)의 $d=1$ 경우)로 절댓값이 $\sqrt p$ 이므로 $\lvert a_p\rvert\le 2\sqrt p$ 다. 무게 $2$ 에서 이것이 Ramanujan–Petersson 추정이고, 타원곡선에서는 $\mathbb F_p$ 점 개수에 대한 Hasse 부등식이다.

## 코호몰로지 동형

무게 $k\ge 2$ 에서 같은 이름의 동형이 하나 더 있다. $\Gamma\subset \mathrm{SL}\_2(\mathbb Z)$ 를 합동 부분군, $V_{k-2}$ 를 차수 $k-2$ 동차다항식의 공간이라 하면 다음이 Hecke 작용과 가환인 동형이다[^1].

$$S_k(\Gamma)\oplus\overline{S_k(\Gamma)}\oplus\mathcal E_k(\Gamma)\cong H^1(\Gamma,V_{k-2})$$

$S_k$ 는 첨점형식, $\mathcal E_k$ 는 Eisenstein 부분이다. $k=2$ 에서 오른쪽이 $\overline X$ 가 아닌 복소 모듈러 곡선의 첫 코호몰로지이고, 왼쪽의 차원 계산이 종수 공식을 준다.

# 활용

- 타원곡선 $E$ 가 $J_0(N)$ 의 몫으로 나오면 $E$ 의 $\ell$ 진 표현이 고유형식의 표현과 같고, 각 $p$ 에서 $\char35{}E(\mathbb F_p)=p+1-a_p$ 가 성립한다. 모든 $\mathbb Q$ 위 타원곡선이 그런 몫이라는 것이 모듈러성 정리다.
- 무게 $2$ 고유형식에서 [Galois 표현](galois-representations.md)을 만들 때 이 관계를 쓴다. 무게가 큰 경우는 Jacobi 다양체 대신 모듈러 곡선 위 층의 코호몰로지를 쓴다.
- 두 고유형식의 $a_p$ 가 법 $\ell$ 로 모두 같으면 두 Galois 표현의 환원이 같다. 이 판정이 [Serre 추측](serre-conjecture.md)과 수준 내리기(level lowering) 논법에서 쓰인다.

[^1]: G. Shimura, *Introduction to the Arithmetic Theory of Automorphic Functions*, Princeton University Press (1971), Ch. 8. 합동 관계는 M. Eichler, "Quaternäre quadratische Formen und die Riemannsche Vermutung für die Kongruenzzetafunktion", Archiv der Mathematik **5** (1954), 355–366.

# 연관 문서

## 선수지식

- [Hecke 작용소](hecke-operators.md)
- [모듈러 곡선](modular-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebraic_topology #complex_analysis
