# Birch–Swinnerton-Dyer 추측

# 개요

[Selmer 군](selmer-groups.md)에서 순위 $r$ 을 계산하려는 시도가 $\text{Ш}$ 라는 장애에 막히는 것을 보았다. 하강은 상한만 주고, 그 상한이 정확한지는 알 수 없었다.

Birch 와 Swinnerton-Dyer 는 1960년대 초 EDSAC 으로 완전히 다른 길을 실험했다. 순위가 크면 유리점이 많고, 유리점이 많으면 각 소수에서 환원한 점의 개수 $N_p=\#E(\mathbb F_p)$ 도 평균적으로 클 것이다. 그래서 그들은

$$
\prod_{p\le X}\frac{N_p}{p}\ \sim\ C\,(\log X)^{r}
$$

를 관측했다. 좌변은 순전히 유한체 위의 점 세기이고 우변의 $r$ 은 $E(\mathbb Q)$ 의 계수다. 국소적 자료의 무한곱이 대역적 불변량을 안다는 주장이다.

이 곱을 정돈한 것이 [Dirichlet $L$ 함수](dirichlet-l-functions.md)와 같은 꼴의 $L(E,s)$ 이고, $\log X$ 의 거듭제곱은 $s=1$ 에서의 소멸 차수로 번역된다.

$$
\mathrm{ord}_{s=1}L(E,s)\;=\;\mathrm{rank}\,E(\mathbb Q)
$$

이것이 약한 BSD 이며, 밀레니엄 문제 중 하나다. 강한 형태는 선행계수까지 명시해 $\#\text{Ш}$ 를 포함한 공식으로 쓴다.

# 직관

## 점이 많으면 환원도 많다

$P\in E(\mathbb Q)$ 가 무한위수 점이면 $P,2P,3P,\dots$ 가 모두 서로 다르고, 이들을 $\bmod\ p$ 로 환원하면 $E(\mathbb F_p)$ 안에 많은 점을 만든다. 물론 $E(\mathbb F_p)$ 는 유한군이라 언젠가 겹치지만, 겹치기 시작하는 시점이 늦어질수록 $N_p$ 가 커진다는 압력이 생긴다. 순위가 클수록 이 압력이 세다.

이것이 엄밀한 논증은 아니다. 실제로 BSD 는 아직 추측이고, 이 직관을 정리로 바꾸는 방법을 아무도 모른다. 그러나 왜 국소 자료가 대역 순위를 알 수 있는지에 대한 최초의 그림이었다.

## 무한곱을 $L$ 함수로 정돈한다

$a_p=p+1-N_p$ 로 두고 Euler 곱을 만든다.

$$
L(E,s)=\prod_{p\nmid N}\Big(1-\frac{a_p}{p^s}+\frac1{p^{2s-1}}\Big)^{-1}\prod_{p\mid N}\Big(1-\frac{a_p}{p^s}\Big)^{-1}
$$

Hasse 의 $|a_p|\le2\sqrt p$ 때문에 이 곱은 $\mathrm{Re}(s)>3/2$ 에서만 수렴한다. $s=1$ 은 수렴 영역 **밖**이다. 그러니 $L(E,1)$ 을 말하려면 해석적 연속이 먼저 필요하고, 그것을 준 것이 모듈러성 정리다. $E$ 가 무게 2 새형식 $f$ 에서 오므로 $L(E,s)=L(f,s)$ 이고, 후자는 $\mathbb C$ 전체로 연속되며 함수방정식

$$
\Lambda(s)=N^{s/2}(2\pi)^{-s}\Gamma(s)L(E,s),\qquad \Lambda(2-s)=w\,\Lambda(s)
$$

를 갖는다. $s=1$ 이 함수방정식의 중심이라는 점이 결정적이다.

## 부호가 순위의 홀짝을 정한다

$w=\pm1$ 이 함수방정식의 부호다. $w=-1$ 이면 $\Lambda(1)=-\Lambda(1)$ 이므로 $L(E,1)=0$ 이고, 소멸 차수가 홀수다. $w=+1$ 이면 짝수다. 그래서 BSD 를 믿으면 **순위의 홀짝이 국소 자료로 결정된다**. 이 따름명제만 따로 떼어 낸 것이 패리티 추측이고, 많은 경우에 증명되어 있다.

## 강한 형태가 왜 $\text{Ш}$ 를 포함하는가

순위만 맞히는 것으로는 부족하다. 선행계수까지 예측하려면 격자의 부피를 재야 하고, 그러려면 $E(\mathbb Q)$ 의 생성원이 얼마나 "성긴지" 를 재는 조절자와, 유리점이 아닌데 국소적으로는 점처럼 보이는 것들의 개수가 필요하다. 후자가 $\#\text{Ш}$ 다. 강한 BSD 는 이 모든 인자가 정확히 맞아떨어진다고 주장한다.

# 정의

## 약한 BSD

$$
\mathrm{ord}_{s=1}L(E,s)=r=\mathrm{rank}\,E(\mathbb Q)
$$

좌변을 해석적 순위, 우변을 대수적 순위라 부른다.

## 강한 BSD

$$
\lim_{s\to1}\frac{L(E,s)}{(s-1)^r}
=\frac{\Omega_E\cdot\mathrm{Reg}_E\cdot\#\text{Ш}(E/\mathbb Q)\cdot\prod_pc_p}{\big(\#E(\mathbb Q)_{\mathrm{tors}}\big)^2}
$$

| 인자 | 뜻 |
|---|---|
| $\Omega_E$ | 실주기. $\int_{E(\mathbb R)}|\omega|$ |
| $\mathrm{Reg}_E$ | 조절자. 생성원의 정준 높이 쌍 행렬식 |
| $\#\text{Ш}$ | Tate–Shafarevich 군의 위수 (유한하다고 가정) |
| $c_p$ | Tamagawa 수. 나쁜 환원 자리의 국소 지수 |
| $E(\mathbb Q)_{\mathrm{tors}}$ | 비틀림 부분군 |

오른쪽 인자 가운데 $\#\text{Ш}$ 만 계산법이 알려져 있지 않다. 나머지는 모두 유효하게 구해진다.

## 정준 높이와 조절자

Néron–Tate 높이 $\hat h\colon E(\mathbb Q)\to\mathbb R_{\ge0}$ 는 $\hat h(mP)=m^2\hat h(P)$ 를 만족하는 이차형식이고, 쌍 $\langle P,Q\rangle=\tfrac12(\hat h(P+Q)-\hat h(P)-\hat h(Q))$ 가 자유 부분에서 양정치다. 생성원 $P_1,\dots,P_r$ 에 대해

$$
\mathrm{Reg}_E=\det\big(\langle P_i,P_j\rangle\big)
$$

가 격자의 공부피다. 순위가 $0$ 이면 빈 행렬식이라 $\mathrm{Reg}_E=1$ 이다.

# 성질

## 알려진 경우

| 결과 | 내용 |
|---|---|
| Coates–Wiles (1977) | CM 곡선에서 $r>0\Rightarrow L(E,1)=0$ |
| Gross–Zagier (1986) | $L'(E,1)$ 이 Heegner 점의 정준 높이와 같다 |
| Kolyvagin (1988) | 해석적 순위 $\le1$ 이면 대수적 순위가 같고 $\text{Ш}$ 가 유한 |
| Skinner–Urban, Kato | Iwasawa 주추측을 통해 순위 $0$ 의 강한 BSD 를 여러 경우에 |
| Bhargava–Skinner–Zhang | 도체로 정렬한 타원곡선의 양의 비율(> 66%)에서 BSD 성립 |

핵심은 Gross–Zagier 와 Kolyvagin 의 결합이다. 전자가 $L$ 의 미분을 기하적 점의 높이로 바꾸고, 후자가 그 점에서 Euler 계를 만들어 Selmer 군을 누른다. 두 정리가 맞물려 **해석적 순위가 0 또는 1 인 경우**가 해결된다. 해석적 순위 $\ge2$ 에서는 단 하나의 곡선에 대해서도 대수적 순위가 그와 같다는 것이 증명되어 있지 않다.

## 왜 $\ge2$ 가 막히는가

Heegner 점은 하나뿐이다. $L'(E,1)$ 하나에 점 하나가 대응하므로 순위 1 까지는 점을 공급할 수 있지만, 순위 2 이상에서 필요한 독립적 점들을 만드는 구성이 없다. Gross–Zagier–Kolyvagin 의 방법이 원리적으로 멈추는 지점이며, $\ge2$ 를 풀려면 다른 종류의 특수점이나 완전히 새로운 도구가 필요하다.

## 다른 형태와 일반화

- **$p$ 진 BSD.** $L$ 함수 대신 $p$ 진 $L$ 함수를 쓰고 Selmer 군의 특성 아이디얼과 비교한다. Iwasawa 주추측이 그 뼈대이고, 고전 BSD 보다 증명된 부분이 많다.
- **Bloch–Kato 추측.** 임의의 모티브 $M$ 에 대해 $L(M,s)$ 의 소멸 차수와 선행계수를 Selmer 군과 행렬식으로 예측한다. BSD 는 $M=h^1(E)(1)$ 인 경우다.
- **Birch–Swinnerton-Dyer over number fields.** 수체 위로 올린 형태. $\text{Ш}$ 와 조절자의 정의가 그대로 확장된다.

# 활용

## 원래의 수치 실험을 재현한다

Birch 와 Swinnerton-Dyer 가 본 것을 직접 볼 수 있다. $\prod_{p\le X}N_p/p$ 를 순위가 다른 곡선에서 계산한다.

```python
def np_count(a, b, p):
    """y^2 = x^3 + ax + b 의 F_p 점 개수 (무한원점 포함)."""
    ls = [0]*p
    for y in range(p):
        ls[y*y % p] += 1
    return 1 + sum(ls[(x*x*x + a*x + b) % p] for x in range(p))

def bsd_product(a, b, X, P):
    prod = 1.0
    for p in P:
        if p > X:
            break
        if p < 5 or (4*a**3 + 27*b**2) % p == 0:   # 나쁜 환원은 건너뛴다
            continue
        prod *= np_count(a, b, p) / p
    return prod
```

```
y^2=x^3-x    (순위 0)   X=500: 1.271   2000: 1.810   8000: 1.589   20000: 1.690
y^2=x^3-25x  (순위 1)   X=500: 6.538   2000: 4.721   8000: 7.935   20000: 9.044
y^2=x^3-49x  (순위 1)   X=500: 3.580   2000: 5.640   8000: 4.741   20000: 7.408
```

순위 0 인 첫 곡선의 곱은 $1.3$ 과 $1.8$ 사이에서 오르내리며 유계로 보이고, 순위 1 인 두 곡선은 $X$ 와 함께 꾸준히 커진다. 정성적 차이는 분명하지만 수렴은 매우 느리다. $(\log X)^r$ 의 지수를 수치로 읽어 내려면 $X$ 를 훨씬 키워야 하고, Birch 와 Swinnerton-Dyer 가 당대의 기계로 이 패턴을 알아본 것이 그래서 인상적이다. $n=5,7$ 이 합동수라는 사실이 두 번째와 세 번째 줄에 나타나 있다.

## $\text{Ш}$ 의 위수를 예측한다

순위 0 곡선에서는 강한 BSD 를 역으로 쓴다. $L(E,1)$ 을 수치로 계산하고 $\Omega_E,c_p,\#E_{\mathrm{tors}}$ 를 구하면

$$
\#\text{Ш}\ \stackrel?=\ \frac{L(E,1)\cdot\#E(\mathbb Q)_{\mathrm{tors}}^2}{\Omega_E\prod_pc_p}
$$

가 예측값을 준다. 이 값은 항상 완전제곱수에 가까운 정수로 나오는데, [Cassels–Tate 쌍](selmer-groups.md)이 그래야 함을 보장하므로 공식의 강력한 정합성 검사가 된다. $\#\text{Ш}=4,9,16,\dots$ 인 곡선들이 이렇게 발견되었고, 하강으로 실제 확인된 경우도 많다.

## 합동수 문제

$n$ 이 합동수인 것은 $E_n:y^2=x^3-n^2x$ 의 순위가 양수인 것과 같다. Tunnell 은 $L(E_n,1)$ 의 소멸 여부를 무게 $3/2$ 형식의 계수로 판정하는 유한 조건을 얻었다.

$$
n\ \text{홀수 무제곱수}:\quad n\ \text{합동수}\ \Longrightarrow\ \#\{x^2+2y^2+8z^2=n\}=2\,\#\{x^2+2y^2+32z^2=n\}
$$

역방향, 곧 조건이 성립하면 합동수라는 주장은 순위 0 의 BSD 에 의존한다. 2000년 넘게 열려 있던 고전 문제가 밀레니엄 문제 하나에 매달려 있는 셈이다.

## 무엇을 사면 무엇을 얻는가

BSD 가 참이면 순위 계산이 유한 시간에 끝나는 알고리즘이 된다. $L$ 함수 쪽에서 순위의 상한을 수치로 얻고 하강에서 하한을 얻어 양쪽이 만나는 것을 기다리면 되며, $\text{Ш}$ 의 유한성이 그 종료를 보장한다. 현재는 순위를 "계산했다" 고 말할 때 사실상 BSD 를 가정하고 있는 경우가 많고, 이것이 이 추측이 계산 정수론의 기반 가정으로 쓰이는 이유다[^1].

[^1]: 원 논문은 B. Birch, H. P. F. Swinnerton-Dyer, *Notes on elliptic curves II*, J. reine angew. Math. **218** (1965). Gross–Zagier 는 *Heegner points and derivatives of L-series*, Invent. Math. **84** (1986). 개설로는 Wiles 의 Clay 문제 해설과 Silverman, *The Arithmetic of Elliptic Curves* 를 보라. 본문의 수치 실험은 직접 한 것이다.

# 연관 문서

## 선수지식

- [Selmer 군과 Tate–Shafarevich 군](selmer-groups.md)
- [Dirichlet 지표와 L 함수](dirichlet-l-functions.md)
- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)

## 더 알아보기

- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Kolyvagin–Logachev 정리와 겨냥 몫](kolyvagin-logachev.md)

#number_theory #complex_analysis #theorem
