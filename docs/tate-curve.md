# Tate 곡선

# 개요

Tate 곡선은 $p$ 진체 $K$ 와 $|q|\lt 1$ 인 $q\in K^{\times}$ 에 대해

$$
E_q(K)\cong K^{\times}/q^{\mathbb Z}
$$

를 만족하는 [타원곡선](elliptic-curves.md)이다. 복소수 위의 격자 몫 $\mathbb C/\Lambda$ 가 $p$ 진에서는 서지 않고, 지수함수로 옮긴 모형만 남는다.

분해 곱셈적 환원을 갖는 $E/K$ 는 어떤 $q$ 에 대한 Tate 곡선이고, 그 $q$ 를 **Tate 주기**라 한다. $j$ 불변량이 $j=q^{-1}+744+196884\thinspace q+\cdots$ 이므로 $|j|\gt1$ 에서 $q$ 가 유일하게 정해진다.

$p$ 진 $L$ 함수의 예외적 영점에 나타나는 $L$ 불변량 $\mathcal L=\log_p(q)/\mathrm{ord}\_p(q)$ 가 이 주기에서 나온다.

# 직관

## 격자가 이산적이지 않은 자리

복소 타원곡선은 격자 몫 $\mathbb C/\Lambda$ 이고 $\Lambda=\mathbb Z+\mathbb Z\tau$ 다. 같은 것을 [$p$ 진수](p-adic-numbers.md) 위에서 하려고 $K$ 안에 $\mathbb Z+\mathbb Z\tau$ 를 놓는다.

$K$ 의 절댓값은 비아르키메데스이므로 정수 $p^k$ 에서 $|p^k|=p^{-k}\to0$ 이다. 부분군 $\mathbb Z$ 자체가 $0$ 에 쌓이므로 이산이 아니고, 몫을 곡선으로 볼 수 없다. 격자 모형은 여기서 막힌다.

## 지수함수로 옮긴 모형

복소수에서는 같은 곡선을 다르게도 쓴다. $z\mapsto e^{2\pi iz}$ 가 $\mathbb C/\mathbb Z\cong\mathbb C^{\times}$ 를 주고, 남은 생성원 $\tau$ 는 $q=e^{2\pi i\tau}$ 를 곱하는 사상이 된다. 따라서

$$
\mathbb C/\Lambda\cong\mathbb C^{\times}/q^{\mathbb Z}
$$

이고 $|q|\lt1$ 이다.

오른쪽 식은 덧셈 대신 곱셈을 쓴다. $K^{\times}$ 안에서 $q^n$ 의 절댓값은 $|q|^n$ 이고 $|q|\lt1$ 이므로 $n\to-\infty$ 에서 발산하고 $n\to\infty$ 에서 $0$ 으로 간다. $q^{\mathbb Z}$ 는 $K^{\times}$ 의 이산 부분군이다. 몫이 군으로 잘 정의된다.

# 정의

## Tate 곡선의 방정식

$|q|\lt1$ 인 $q\in K^{\times}$ 에 대해

$$
s_k(q)=\sum_{n\ge1}\frac{n^kq^n}{1-q^n},\qquad
a_4(q)=-5\thinspace s_3(q),\qquad
a_6(q)=-\frac{5\thinspace s_3(q)+7\thinspace s_5(q)}{12}
$$

로 두면 두 급수가 $K$ 에서 수렴하고

$$
E_q:\ y^2+xy=x^3+a_4(q)\thinspace x+a_6(q)
$$

가 $K$ 위의 타원곡선이다. 판별식은 $\Delta=q\prod_{n\ge1}(1-q^n)^{24}$ 이고 $j$ 불변량은 $q^{-1}+744+196884\thinspace q+\cdots$ 다.

## 균등화 사상

$u\in\bar K^{\times}$ 에 대해

$$
X(u)=\sum_{n\in\mathbb Z}\frac{q^nu}{(1-q^nu)^2}-2\thinspace s_1(q),\qquad
Y(u)=\sum_{n\in\mathbb Z}\frac{(q^nu)^2}{(1-q^nu)^3}+s_1(q)
$$

가 $u\mapsto(X(u),Y(u))$ 로 동형

$$
\bar K^{\times}/q^{\mathbb Z}\ \xrightarrow{\ \sim\ }\ E_q(\bar K)
$$

를 주고, 이 동형은 $\mathrm{Gal}(\bar K/K)$ 의 작용과 교환한다.[^1] $u\in q^{\mathbb Z}$ 는 무한원점으로 간다.

## Tate 주기

$E/K$ 가 분해 곱셈적 환원을 가지면 $E\cong E_q$ 인 $q\in K^{\times}$ 가 유일하게 있고, 이 $q$ 를 $E$ 의 **Tate 주기** $q_E$ 라 한다. $\mathrm{ord}\_p(q_E)=-\mathrm{ord}\_p(j(E))$ 이므로 $q_E$ 의 부값이 $j$ 의 극의 위수다.

# 성질

## 균등화의 존재

**정리**(Tate). $j(E)$ 의 절댓값이 $1$ 보다 크면 $E$ 는 $\bar K$ 위에서 어떤 $E_q$ 와 동형이다. $E$ 가 $K$ 위에서 $E_q$ 와 동형인 것은 $E$ 가 분해 곱셈적 환원을 가질 때다.[^1]

증명의 요지. $j=q^{-1}+744+\cdots$ 를 $q$ 에 대해 형식적으로 뒤집으면 $q=j^{-1}+744\thinspace j^{-2}+\cdots$ 가 나오고, $|j|\gt1$ 에서 이 급수가 수렴한다. 얻은 $q$ 로 $E_q$ 를 세우면 $j(E_q)=j(E)$ 이므로 $\bar K$ 위에서 동형이다. $K$ 위의 동형 여부는 이차 비틀림으로 갈리고, 그 비틀림이 자명한 경우가 분해 곱셈적 환원이다. ∎

## 비분해 환원과 이차 비틀림

$E$ 가 비분해 곱셈적 환원을 가지면 이차 불분기 확대 $K'/K$ 위에서 분해가 되고, $E$ 는 $E_q$ 의 $K'/K$ 에 대한 이차 비틀림이다. 이 경우 $E(K)\cong\lbrace u\in K'^{\times}:N(u)\in q^{\mathbb Z}\rbrace/q^{\mathbb Z}$ 꼴로 쓴다.

## Tate 가군의 모양

균등화에서 $\ell$ 등분점은 $\zeta_\ell$ 과 $q^{1/\ell}$ 이 생성한다. 따라서 $\ell$ 진 Tate 가군 위의 Galois 표현이

$$
\rho\sim\begin{pmatrix}\chi&\ast\cr 0&1\end{pmatrix}
$$

꼴이고 $\chi$ 는 원분 지표다. $\ast$ 는 $q$ 의 Kummer 코사이클이며, $q$ 가 $\ell$ 멱이 아니면 이 확장이 분해되지 않는다.

## $L$ 불변량

$$
\mathcal L=\frac{\log_p(q_E)}{\mathrm{ord}\_p(q_E)}
$$

를 $E$ 의 $L$ 불변량이라 한다. $\log_p$ 는 Iwasawa 대수 로그다. 분모가 $j$ 의 극의 위수이므로 두 값 모두 Tate 주기에서 읽힌다.

# 활용

## $p$ 진 $L$ 함수의 예외적 영점

$E$ 가 $p$ 에서 분해 곱셈적 환원을 가지면 $p$ 진 $L$ 함수의 보간 인자가 $s=1$ 에서 $0$ 이 되어 복소 $L$ 함수와 소실 차수가 어긋난다. Mazur–Tate–Teitelbaum 추측은 그 차이를 $\mathcal L$ 로 메우며, Greenberg 와 Stevens 가 Hida 족 위의 변형으로 증명했다.[^2]

## 곱셈적 환원 곡선의 국소점

$K^{\times}/q^{\mathbb Z}$ 의 여과 $\mathcal O_K^{\times}\supseteq1+\mathfrak m$ 을 그대로 옮기면 $E(K)$ 의 성분군이 $\mathbb Z/\mathrm{ord}(q)$ 임이 나온다. 국소 Tamagawa 수 계산이 이 몫에서 나온다.

## 모듈러 곡선의 첨점 근방

$X_0(N)$ 의 첨점 근방에서 보편 타원곡선을 쓰려면 퇴화하는 올을 담을 모형이 있어야 한다. Tate 곡선이 그 모형이고, Deligne 와 Rapoport 의 모듈러 곡선 정수 모형이 첨점에서 이것을 붙인다.[^3]

[^1]: J. Silverman, *Advanced Topics in the Arithmetic of Elliptic Curves*, GTM 151, Springer (1994) 5 장. Tate 의 1959 년 원고는 *A review of non-Archimedean elliptic functions*, in *Elliptic Curves, Modular Forms and Fermat's Last Theorem* (1995), 162–184 로 출판되었다.
[^2]: B. Mazur, J. Tate, J. Teitelbaum, *On $p$-adic analogues of the conjectures of Birch and Swinnerton-Dyer*, Invent. Math. **84** (1986), 1–48. 증명은 R. Greenberg, G. Stevens, *$p$-adic $L$-functions and $p$-adic periods of modular forms*, Invent. Math. **111** (1993), 407–447.
[^3]: P. Deligne, M. Rapoport, *Les schémas de modules de courbes elliptiques*, in *Modular Functions of One Variable II*, Lecture Notes in Math. **349**, Springer (1973), 143–316.

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)
- [$p$ 진수](p-adic-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #complex_analysis
